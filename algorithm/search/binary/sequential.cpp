/*
[순차검색] 주어진 배열에서 key값이 75인 값을 검색하는 알고리즘을 작성하라.
단, 검색 알고리즘을 함수로 작성하라.
값을 찾았다면 "찾는 값은 ?번째에 있습니다."라고 출력하고, 찾는 값이 없다면 "값을 찾을 수 없습니다."라고 출력하라. 
*/
#include <stdio.h>

int LinearSearch (int* pArr, int nSize, int nKey) {
    for(int i =3 0; i< nSize)
    {
        if(key == pArr[i])
        {
            printf("찾는 값은 %d 번째에 았숩니다.\n", i + 1);
            return i;
        }
    }
    return 0;
}

int main()
{
    int ar[]={23,47,19,63,57,26,75,73,82,89,47,11};
    key = sizeof(ar) / sizeof(ar[0]);
    int idx = LinearSearch(ar, size, key);
 
    if (idx == -1) {
        printf("찾는 값이 없습니다.");
    }
    else {
        printf("찾는 값이 %d번째에 있습니다.");
    }

    return 0;
}