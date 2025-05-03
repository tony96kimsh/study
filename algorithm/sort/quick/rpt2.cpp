#include <iostream>
using namespace std;

int* InputArr(int* size) {
    int* arr;

    cout << "정수 개수를 입력 : ";
    cin >> *size;
    cout << endl;

    arr = new int[*size];
    if (arr == NULL) {
        cout << "메모리 할당 실패" << endl;
        exit(1);
    }


    for(int i = 0; i < *size; i++) {
        cout << i + 1 << " / " << *size <<"번 째 값 입력 : ";
        cin >> arr[i];
    }
    cout << endl;
    return arr;
}

void ShowArr(int* arr, int size) {
    for(int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void Swap (int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
void QuickSort(int* arr, int left, int right) {
    if(left >= right) return;
    
    int pivot = left;
    int low = left + 1;
    int high = right;

    while(low <= high) {
        while(low <= right && arr[low] <= arr[pivot]) low++;
        while(high >= left + 1 && arr[high] > arr[pivot]) high--;

        if(low < high) {
            Swap(&arr[low], &arr[high]);
        }
    }

    Swap(&arr[pivot], &arr[high]);

    QuickSort(arr, left, high - 1);
    QuickSort(arr, high + 1, right); 

}

int main () {
    int size;
    int* arr = InputArr(&size);

    cout << "입력 값 : ";
    ShowArr(arr, size);

    QuickSort(arr, 0, size - 1);

    cout << "정렬 후 : ";
    ShowArr(arr, size);

    delete[] arr;
    return 0;
}

// 5개
// 입력: 5 3 8 1 2