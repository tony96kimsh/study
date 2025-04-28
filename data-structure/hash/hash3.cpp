#include<stdio.h>
#include<string.h>

#define BK 10
#define SL 1

int hashtable[BK][SL];

int Hash(int nKey) {
   return nKey % 10;
}

void InsertValue(int nKey) {
   int bucket = Hash(nKey);
   while(hashtable[bucket][0] != 0)
   {
     bucket = bucket +1;
   }
   hashtable[bucket][0] = nKey;
   
}

int FindValue(int nKey)
{
   int bucket = Hash(nKey);

   while(hashtable[bucket][0] != 0)
   {
        if (hashtable[bucket][0] == nKey) {
            return 1;
        }
        bucket = bucket +1;
   }
   return 0;
}

void main()
{
   int key = 0;
   memset(hashtable, 0, sizeof(hashtable)); //초기화

   for (int i = 0; i < 5; i++) {
      printf("%d번째 값을 입력하세요 : ", i + 1);
      scanf("%d", &key);
      InsertValue(key);
   }

   printf("검색할 키를 입력하세요 : ");
   scanf("%d", &key);

   if (FindValue(key)) {
      printf("검색되었습니다.");
   }
   else {
      printf("검색되지 않았습니다.");
   }
}