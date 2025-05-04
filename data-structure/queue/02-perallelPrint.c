#include <stdio.h>
#include <stdbool.h> // boolean
#include <stdlib.h> // malloc
#include <string.h> // memset

#ifdef _WIN32
    #include <windows.h>
    #define SLEEP(sec) Sleep((sec) * 1000)
#else // mac
    #include <unistd.h>
    #define SLEEP(sec) sleep(sec)
#endif

#include <time.h>

// 문서 큐
int* doc_queue;
int doc_count = 0;
int size = 5;

// 각 문서 페이지
int doc_page;
int now_page;

//큐 메모리 - 초기화 함수: 
void InitQueue(int size) {
    if(doc_queue[size - 2] != 0) {
        size += 5;
        realloc(doc_queue, sizeof(int) * size);
        // 추가 할당 부분 0으로 초기화 (NULL은 정수 논리 연산 불가!)
        memset(doc_queue + size - 5, 0, sizeof(int) * 5);
    }
};

//프린터 - 페이지 추가 함수 : 
bool Insert(int data) {
    // 인쇄 수 입력
    printf("인쇄 페이지를 입력해주세요(-1 종료): ");
    int new_doc = rand() % 9 + 2; // 2~10
    // 종료 처리
    if(new_doc == -1 ) {
        return true;
    }
    // 에러 처리
    while (!(new_doc > 0 && new_doc < 11)) {               
        printf("유효하지 않은 값입니다. 다시 입력해주세요(1~10)");
        new_doc = rand() % 9 + 2; // 2~10
    }

    // 페이지 큐 추가
    for(int i = 0; i < size; i++) {
        if(doc_queue[i] == 0) {
            doc_queue[i] = new_doc;
            break;
        }
    }
};

//현재 - 대기 문서 출력 함수 : 
void PrintQueue() {
    doc_count = 0;
    for(int i = 0; i < size; i++) {
        if(doc_queue[i] == 0) {
            printf("대기중인 문서 수 : %d \n", doc_count);
            break;
        } else {
            doc_count++;
        }
    }

    // 문서 출력
    now_page = 1;
    doc_page = doc_queue[0];
    printf("%d 페이지짜리 새 문서 삽입\n", doc_page);
    fflush(stdout);
};

//프린터 - 페이지 삭제 함수 :  
int Delete() {
    while(doc_queue[0] > 0) {
        SLEEP(1);
        --doc_queue[0];
        printf("%d 페이지 인쇄 중...\n",
            now_page);
        now_page++;

        // 문서 완료 시 큐 정렬
        if(doc_queue[0] == 0) {
            for(int i = 1; i < size; i++) {
                if (doc_queue[i] == 0) {
                    break;
                } else { // 큐가 있으면 값을 앞으로 옮김
                    doc_queue[i - 1] = doc_queue[i];
                    doc_queue[i] = 0;
                    doc_page = doc_queue[0];
                    doc_count++;
                }
            }
        }
    }    
};

int main() {    
    // malloc대신 자동으로 0으로 채워주는 calloc 사용
    doc_queue = calloc(size, sizeof(int));

    // 프린터 무한루프
    while(1) {
        // 페이지 추가 함수 
        Insert(size);

        // 마지막 큐 메모리 확인
        InitQueue(size);

        // 문서 큐 인쇄
        PrintQueue();         

        // 페이지 삭제 함수 
        Delete();
    }    
    printf("프린트가 종료되었습니다.");
    free(doc_queue);
    return 0;
}