#include <stdio.h>
#include <string.h>

#define BK 10 // bucket
#define SL 1 // slot

int hashtable[BK][SL];

//키 값에 따른 위치값 출력 함수
int Hash(int nKey) {
    return nKey % 10;
}

void InsertValue (int nKey) {
    int bucket = Hash(nKey);
    if(hashtable[bucket][0] == 0)
    {
        hashtable[bucket][0] = nKey;
    }
}

int FindValue(int nKey)
{
    int bucket = Hash(nKey);
    return (hashtable[bucket][0] == nKey);
}

int main()
{
    int key;
    memset(hashtable, 0, sizeof(hashtable)); //초기화


    for(int i = 0; i < 5; i++) {
        printf("%d번째 값을 입력하세요 : ", i + 1);
        scanf("%d", &key);
        InsertValue(key);
    }

    printf("검색할 키를 입력하세요 : ");
    scanf("%d", &key);

    if(FindValue(key)) {
        printf("검색되었습니다.");
        printf("위치 : %d, %d", Hash(key), 0);
    } else {
        printf("검색되지 않았습니다.\n");
    }

    return 0;
}