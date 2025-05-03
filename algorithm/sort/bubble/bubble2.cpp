// 키 순서대로 정렬
#include <stdio.h>
#include <string.h>

void swap(char* a, char* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void BubbleSort(char* str, int len) {
    for(int i = 0; i < len - 1; i++){
        for(int j = 0; j < len - i ; j++)
        {            
            if (str[j] > str[j + 1]) {
                // swap
                swap(&str[j], &str[j+1]);
            }
        }
        printf("%d Step: %s\n", i + 1, str);
    }

}

int main () 
{
    char str[] = "winapi";

    int len = strlen(str); // 6

    printf("정렬 전 문자열 : %s\n", str);
    BubbleSort(str, len);
    // 정렬 후 aiinpw
    printf("정렬 후 문자열 : %s", str);

    return 0;
}