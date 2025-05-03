/**
 * 사용자에게 정수 배열을 입력받고, 이를 퀵 정렬 알고리즘을 사용하여 오름차순으로 정렬하는 프로그램을 작성하라.

요구 사항

1. 배열 입력: 프로그램은 사용자가 배열의 크기를 입력받고, 그 크기만큼의 정수를 입력 받아야 한다.
2. 퀵 정렬 구현: 퀵 정렬 알고리즘을 사용하여 배열을 정렬해야 한다.
3. 출력: 정렬된 배열을 출력해야 합니다.
4. 시간 복잡도: 신경쓰지 말자.

예시
입력 예시:

배열 크기: 6
배열 요소: 10 7 8 9 1 5

출력 예시:
정렬된 배열: 1 5 7 8 9 10
 */

#include <stdio.h>
#include <stdlib.h>

int* inputArr (int* size) {
    printf("입력 개수 : ");
    scanf("%d", size);

    int* arr = (int*)malloc(sizeof(int) * (*size));
    if (arr == NULL) {        
        printf("메모리 할당 실패");
        exit(1);// 비정상종료 return 1은 main함수에서만 적용 => exit 사용
    }

    for(int i = 0; i < (*size); i++) {
        printf("%d/%d 번 째 정수를 입력하세요 : ", i+1, *size);
        scanf("%d", &arr[i]);
        printf("\n");
    }

    return arr;
}

void showMsg (int* arr, int size) {
    printf("입력 값 : ");
    for(int i = 0; i < size; i++) {
        printf("%d ", arr[i]);    
    }
    printf("\n");
}

void Swap(int* a, int* b){
    int temp = *a;
    *a = *b;
    *b = temp;
}

// init : QuickSort (arr, 0, size-1);
void QuickSort (int* arr, int left, int right) {
    if(left >= right) return;
    int pivot = left;
    int low = left + 1;
    int high = right;

    while(low <= high) {
        while(arr[low] <= arr[pivot] && low <= right) low++;
        while(arr[high] >= arr[pivot] && high >= left + 1) high--;

        if(low < high) {
            Swap(&arr[low], &arr[high]);
        }
    }
    Swap(&arr[pivot], &arr[high]);

    // high는 pivot과 swap되어 기준값 => 정렬 완료된 부분
    // [left] [...] [high-1] [pivot] [hight+1] [...] [right]
    QuickSort(arr, left, high-1);
    QuickSort(arr, high+1, right);
}

int main () {
    int size;
    int* arr = inputArr(&size);
    
    showMsg (arr, size);
    QuickSort (arr, 0, size-1);
    showMsg (arr, size);
    

    free(arr);
    return 0;
}

// 5개
// 입력: 5 3 8 1 2