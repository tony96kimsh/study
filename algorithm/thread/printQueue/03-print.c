/* 
# 쓰레드프린트 큐 로직

## 01 메모리 초기화 void InitQueue(int size)
- 동적 메모리를 모두 초기화한다. 

## 02 문서 추가 - int Insert(int data)
- 5초마다 인쇄 페이지 입력을 랜덤값으로 1~9 받는다.
- 입력받은 페이지를 프린트 큐에 추가한다. 
- 출력 : 새 문서 도착 (n페이지)
- 프린트 큐 메모리가 차면 동적으로 늘린다.

## 03 인쇄 - void PrintQueue()
- 프린트 큐 가장 앞에 있는 문서를 1초당 1페이지 출력한다.
- 출력: 인쇄 중... (남은 n페이지)
- 문서 출력이 완료되면, 모든 문서의 인덱스를 1칸 씩 당긴다.
- 출력: 문서 인쇄 완료
- 출력: 대기 문서: X개

## 04 쓰레드
- 문서추가와 출력 동시 접근 고려 (mutex)

## 05 종료 - int Delete()
- 할당 해제 한다
*/

#include <stdio.h>
#include <stdlib.h> // random
#include <unistd.h> // sleep
#include <string.h> // memset
#include <time.h>    // time(NULL) for srand
#include <pthread.h>

int* print_Queue;
int capacity = 10; // 큐 할당 메모리
int count = 0; // 큐 문서 수
int done = 0; // 문서 추가 완료 유무

pthread_mutex_t mutex; // 구조체 변수 선언

void InitQueue(int size) {
    // 큐 메모리 초기 할당
    print_Queue = malloc(sizeof(int) * size);
    if(print_Queue == NULL) {
        printf("메모리 할당 실패\n");
    }
    memset(print_Queue, 0, sizeof(int) * size);
}

int Insert(int data) {
    // 큐 메모리 재할당(overflow 방지)
    if (count >= capacity) {
        int old_capacity = capacity;
        capacity += 10;

        int* new_Queue = realloc(print_Queue, sizeof(int) * capacity);
        if(new_Queue == NULL) {
            printf("메모리 할당 실패\n");
            return 1;
        }

        print_Queue = new_Queue;

        // 늘어난 영역 0으로 초기화
        memset(print_Queue + old_capacity, 0, sizeof(int) * 10);
    }
    
    // 페이지 추가
    print_Queue[count] = data;
    // 결과 출력
    count++;
    printf("새 문서 도착 %d 페이지\n", data);
    printf("대기 문서: %d개\n", count);
    return 0;
}

// Insert 쓰레드 처리
void* InsertThread(void* arg) {
    for(int i = 0; i < 20; i++) {
        int page = (rand() % 8) + 2;
        pthread_mutex_lock(&mutex);
        Insert(page);
        pthread_mutex_unlock(&mutex);
        sleep(5);
    }
    // 문서 추가 완료 표시
    done = 1;
    return NULL;
}

/*

    프린트 큐 대기
*/

// PrintQueue 쓰레드 처리
void* PrintThread(void* arg) {
    while (1) {
        pthread_mutex_lock(&mutex);

        if(count > 0) {
            // 문서 인쇄
            while (print_Queue[0] > 0) {
                printf("%d 페이지 인쇄 중...\n", print_Queue[0]);
                print_Queue[0]--;
                // 인쇄 대기 시간 동안 잠금해제 후 잠금
                pthread_mutex_unlock(&mutex);
                sleep(1);
                pthread_mutex_lock(&mutex);
            }

            // 문서 인쇄 후 큐 앞으로 당기기
            printf("문서 인쇄 완료\n");            
            for (int i = 1; i < count; i++) {
                print_Queue[i - 1] = print_Queue[i];
            }    
            count--;
            printf("대기 문서: %d개\n", count);
        }

        // 종료 조건: 문서 추가 끝났고, 더 이상 대기 문서 없음
        if (done && count == 0) {
            pthread_mutex_unlock(&mutex);
            break;
        }
        pthread_mutex_unlock(&mutex);
        sleep(1);
    }
    return NULL;
}

int Delete() {
    pthread_mutex_destroy(&mutex);
    free(print_Queue);
    printf("프린트 종료");
}

int main () {
    srand(time(NULL)); // 매번 다른 랜덤값을 위해 초기화
    // 큐 생성
    InitQueue(capacity);
    pthread_mutex_init(&mutex, NULL);

    pthread_t tid_insert, tid_print;
    pthread_create(&tid_insert, NULL, InsertThread, NULL);
    pthread_create(&tid_print, NULL, PrintThread, NULL);

    pthread_join(tid_insert, NULL);
    pthread_join(tid_print, NULL);

    // 할당, 뮤텍스 초기화
    Delete();
    return 0;
}