
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

void Swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 초기 호출 QuickSort(arr, 0, size - 1);
void QuickSort(int* arr, int left, int right) {  
    if(left >= right) return;

    int pivot = arr[left];
    int low = left + 1; // 
    int high = right;

    while(low <= high) {
        // 배열 좌측 큰값 찾기
        while(low <= right && arr[low] <= pivot) {
            low++;
        }

        // 배열 우측 작은 값 찾기
        while(high >= left + 1 && arr[high] > pivot) {
            high--;
        }

        // 실제 배열 값 바꾸기 위한 call by reference
        if(low < high) {
            Swap(&arr[low], &arr[high]);
        }
    }

    // 피벗(&arr[left])을 기준 위치로 변경
    Swap(&arr[left], &arr[high]);

    // 재귀호출
        // 피벗보다 작은 부분
    QuickSort(arr, left, high - 1);
        // 피벗보다 큰 부분
    QuickSort(arr, high + 1, right);        
}

int main () {
    int capacity = 5;
    //동적 메모리 선언
    int* arr = (int*)malloc(sizeof(int) * capacity);
    int size = 0;
    
    while(1) {
        int input;
        printf("정수 값을 입력 (-1은 종료) : ");
        scanf("%d", &input);
        if(input == -1) {
            break;
        }        
        
        // 메모리 초과 시, 재할당
        if(capacity <= size + 1) {
            capacity += 5;
            arr = (int*)realloc(arr, sizeof(int) * capacity);          
            // 예외처리: 할당 실패
            if(arr == NULL){
                free(arr);
                printf("메모리 재할당 실패");
                return 1;
            }            
        }

        arr[size++] = input;
    }

    printf("\n정렬 전");
    for(int i =0; i < size; i++) {
        printf("%d ", arr[i]);
    }

    QuickSort(arr, 0, size - 1);

    printf("\n정렬 후");
    for(int i =0; i < size; i++) {
        printf("%d ", arr[i]);
    }

    // 동적 메모리 해제
    free(arr);

    return 0;
}
// 사용자가 순차적으로 입력: 5 3 8 1 2 -1