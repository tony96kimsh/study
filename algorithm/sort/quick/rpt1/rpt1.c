/*
사용자는 정수를 순차적으로 입력하며, 프로그램은 입력받은 데이터를 동적 배열에 저장하고,
 사용자가 입력을 마친 후 이 배열을 오름차순으로 정렬하여 출력하라.

요구 사항
1. 동적 배열 할당: 프로그램은 입력된 데이터의 수를 미리 알 수 없으므로, 동적 배열을 사용하여 데이터를 저장해야 한다.
2. 입력 및 크기 조정: 사용자가 데이터를 입력할 때마다 배열의 크기를 동적으로 조정해야 한다.
3. 퀵 정렬 구현: 동적 배열에 저장된 데이터를 퀵 정렬 알고리즘을 사용하여 정렬하라.
4. 메모리 관리: 모든 작업이 끝난 후 동적으로 할당된 메모리를 해제해야 한다.

예시
입력 예시:
사용자가 순차적으로 입력: 5 3 8 1 2

출력 예시:
정렬된 배열: 1 2 3 5 8
*/

#include <stdio.h>
#include <stdlib.h>

int main () {
    int capacity = 5;
    int size = 0;
    int* arr = (int*)malloc(sizeof(int) * capacity);
    
    if(arr == NULL) {
        printf("메모리 할당 실패\n");
        return 1;
    }

    while(1) {
        int input;
        printf("정수값을 입력하세요 (-1 입력 시 종료): ");
        scanf("%d", &input);

        if(input == -1) break;

        if(size == capacity) {
            capacity += 5;
            int* temp = (int*)realloc(arr, sizeof(int) * capacity);
            if (temp == NULL) { // 메모리 확보 실패시 OS에서 NULL리턴
                printf("메모리 재할당 실패\n");
                free(arr);
                return 1;                
            }
            arr = temp; // why use "temp" ?? => 동적할당 실패 시, arr의 값을 잃지 않기 위해
        }

        arr[size++] = input;
    }

    printf("입력된 정수들: \n");
    for(int i = 0; i < size; i++) {
        printf("%d", arr[i]);
    }   

    free(arr);
    return 0;
}
// 사용자가 순차적으로 입력: 5 3 8 1 2