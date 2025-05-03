/*사용자는 정수를 순차적으로 입력하며, 프로그램은 입력받은 데이터를 동적 배열에 저장하고,
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
#include <iostream>
using namespace std;

void Swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void inputArr (int** arr, int* size, int* capacity) {
    while(true) {
        int input;
        cout << "정수값을 입력 (-1 종료) : ";
        cin >> input; 
        cout << endl;

        if(input == -1) break;

        if(*size >= *capacity) {
            *capacity+=5;
            int* newArr = new int[*capacity];
            // 기존값 복사    
            for(int i=0; i < *size; i++) {
                newArr[i] = (*arr)[i];
            }
            // 기존 메모리 해제
            delete[] *arr;

            // 포인터 변경
            *arr = newArr;
        }
        (*arr)[(*size)++] = input;
    }
}

void showArr (int* arr, int size) {
    cout << "입력값 : ";
    for(int i=0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void QuickSort(int* arr, int left, int right) {
    if(left >= right) return;

    int low = left+1;
    int high = right;
    int pivot = left;

    while(1) {
        if(low >= high) break;
        while(arr[low] <= arr[pivot] && low <= high) low++;
        while(arr[high] > arr[pivot] && high >= low) high--;

        if(low < high) {
            Swap(&arr[low], &arr[high]);
        }
    }
    Swap(&arr[pivot], &arr[high]);

    QuickSort(arr, left, high-1);
    QuickSort(arr, high+1, right);
}

int main () {
    int size = 0;
    int capacity = 5;
    int* arr = new int[capacity]; 
    
    inputArr (&arr, &size, &capacity);
    showArr (arr, size);
    
    QuickSort(arr, 0, size-1);
    showArr (arr, size);

    // 동적 메모리 할당 해제
    delete[] arr;
    return 0;
}
//정렬된 배열: 5 3 8 1 2 -1