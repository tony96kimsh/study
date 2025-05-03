#include <stdio.h>
#include <string.h>

#define BUCKET_SIZE 10
#define SLOT_SIZE 10

int hashtable[BUCKET_SIZE][SLOT_SIZE]; // 각 해시 버킷마다 SLOT_SIZE 크기의 배열
int count[BUCKET_SIZE]; // 각 버킷에 들어간 값의 개수 (삽입 위치 추적)

int Hash(int nKey) {
    return nKey % 10;
}

void InsertValue(int nKey) {
    int bucket = Hash(nKey);
    for (int i = 0; i < count[bucket]; i++) {
        if(hashtable[bucket][i] == nKey) return;
    }

    if (count[bucket] < SLOT_SIZE) {
        hashtable[bucket][count[bucket]] = nKey;
        count[bucket]++;
    }

}

int FindValue(int nKey) 
{
    int bucket = Hash(nKey);
    for (int i = 0; i < count[bucket]; i++) {
        if (hashtable[bucket][i] == nKey) {
            return 1;
        }
    }
    return 0;
}


int main() {
    int key;
    memset(hashtable, 0, sizeof(hashtable));
    memset(count, 0, sizeof(count));

    for(int i = 0; i < 5; i++) {
        printf("%d번째 값을 입력하세요 : ", i + 1);
        scanf("%d", &key);
        InsertValue(key);
    }

    printf("검색할 키를 입력하세요 : ");
    scanf("%d", &key);

    if (FindValue(key)) {
        printf("검색되었습니다.\n");
    } else {
        printf("검색되지 않았습니다.\n");
    }   

    return 0;
}