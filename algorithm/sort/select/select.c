#include <stdio.h>
#include <string.h>

void swap(char* a, char* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void QuickSort(char* ar, int size) {
// 최소값의 인덱스를 저장한 인덱스 선언
    int minidx = 0;

    for(int i = 0; i < size - 1; i++){
        minidx = i;
        for(int j = 1 + i; j < size; j++) {            
            if (ar[minidx] > ar[j]) {
                minidx = j;
            }
        }
        if(minidx != i) {
            swap(&ar[minidx], &ar[i]);
        }
    }
}

int main () 
{
    char str[] = "winapi";

    int len = strlen(str); // 6

    printf("정렬 전 문자열 : %s\n", str);


    // SelectionSort(str, len);
    // // 정렬 후 aiinpw
    // printf("정렬 후 문자열 : %s", str);

    return 0;
}