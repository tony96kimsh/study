#include <stdio.h>
#define SIZE 50
int main () {
    int arr[SIZE];
    
    for(int i = 0; i < SIZE; i++) {
        arr[i] = i+1;
    }

    // 합성수 제거 (값 0으로 처리)
    for(int i = 2; i <= SIZE / 2; i++) {
        for(int j = 2; i * j <= SIZE; j++) {
            arr[(i * j) - 1] = 0;
        }
    }
    
    //출력
    arr[0] = 0;
    for(int i = 1; i < SIZE; i++) {
        if(arr[i] != 0) {
            printf("%d, ", arr[i]);
        }
    }
    
    return 0;
} 