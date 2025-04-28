#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUCKET_SIZE 10

int* hashtable[BUCKET_SIZE];
int count[BUCKET_SIZE];

// 해시 함수: 키를 버킷 인덱스로 변환
int Hash(int nKey) {
    return nKey % BUCKET_SIZE;    
}

void InsertValue(int nKey) {
    int bucket = Hash(nKey);

    // 버킷이 비어 있다면 새 배열 할당
    if(hashtable[bucket] == NULL) {
        hashtable[bucket] = (int*)malloc(sizeof(int));
        hashtable [bucket][0] = nKey;
        count[bucket] = 1;
        return;
    }

    // 중복 검사
    for (int i = 0; i < count[bucket]; i++) {
        if (hashtable[bucket][i] == nKey) return;
    }

    // 배열 크기 확장 후 삽입
    hashtable[bucket] = (int*)realloc(hashtable[bucket], sizeof(int) * (count[bucket] + 1));
    hashtable[bucket][count[bucket]] = nKey;
    count[bucket]++;
}

//해시 테이블에서 값 검색
int FindValue(int nKey) {
    int bucket = Hash(nKey);

    for(int i = 0; i < count[bucket]; i++) {
         if(hashtable[bucket][i] == nKey) return 1; // 찾음
    }
    return 0; // 없음
}

// 전체 해시 테이블 출력 (디버깅용)
void PrintHashTable() {
    for (int i = 0; i < BUCKET_SIZE; i++) {
        printf("[%d]: ", i);
        for (int j = 0; j < count[i]; j++) {
            printf("%d ", hashtable[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int key;

    // 초기화
    for (int i = 0; i < BUCKET_SIZE; i++) {
        hashtable[i] = NULL;
        count[i] = 0;
    }

    // 값 삽입
    for (int i = 0; i < 5; i++) {
        printf("%d번째 값을 입력하세요 : ", i + 1);
        scanf("%d", &key);
        InsertValue(key);        
    }

    // 해시 테이블 출력
    printf("\n=== 해시 테이블 상태 ===\n");
    PrintHashTable();

    // 검색
    printf("\n검색할 키를 입력하세요: ");
    scanf("%d", &key);

    if (FindValue(key)) {
        printf("검색되었습니다.\n");
    } else {
        printf("검색되지 않았습니다.\n");
    }
    
    // 메모리 해제
    for (int i = 0; i < BUCKET_SIZE; i++) {
        if (hashtable[i] != NULL) {
            free(hashtable[i]);
        }
    }

    return 0;
}
