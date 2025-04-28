/*
아래의 입력값을 입력 받는다.
입력값 : 143 134 137 132 140 134
오름차순으로 버블 정렬
*/
#include <iostream>

using namespace std;

void Swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int getArr[6] = {0, 0, 0, 0, 0, 0};
    int size = sizeof(getArr) / sizeof(int);
    cout << size << endl;

    cout << "정수 6개를 입력하세요." << endl;
    
    for(int i = 0; i < size; i++) {
        cin >> getArr[i];
    }
    
    for(int i = 0; i < size - 1; i++) {
        for(int j = 0; j < size - i - 1; j++) {
            if(getArr[j] > getArr[j+1]) {
                Swap(&getArr[j], &getArr[j+1]);
            }
        }
        cout << i + 1 << endl;
        for(int j = 0; j < size; j++) {
            cout << getArr[j] << ", ";
        }
        cout << endl;
    }
}