#include<stdio.h>
#include<memory>

int* ar;
int size;
int num = 0;
int growby; // 재할당 시 늘어날 사이즈

void InitArray(int asize, int agrowby) {
    size = asize;
    growby = agrowby;
    num = 0;
    ar = (int*)malloc(size * sizeof(int));
}

void Insert(int idx, int value)
{
    int need = num + 1;
    if(need > size) {
         size = need + growby;
         realloc(ar, size * sizeof(int));  
    }
    memmove(ar + idx + 1, ar + idx, (num - idx) * sizeof(int));
    ar[idx] = value;
    num++;
}

void DumpArray() {
    for(int i = 0; i < num; i++)
    {
        printf("%2d ", ar[i]);
    }
    printf("\n");
    
}

int main() {
    /* 1.allocate memory */
    InitArray(10, 5); // 10개가 되면 사이즈 5개를 늘리겠다.
    for (int i = 0; i <= 8; i++) {
        Insert(num, i);
    }
    Insert(3, 10);
    DumpArray();
    Insert(3, 11);
    DumpArray();
    Insert(3, 12);
    DumpArray();

    return 0;
}
