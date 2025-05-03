/*숫자 n이 주어졌을 때, n의
피보나치(Fibonacci) 수열을 출력하는 프로그램을 작성하시오. */
#include <iostream>

using namespace std;

void getFbc(int* ar, int num) {
    for(int i = 0; i < num - 1; i++) {
        ar[i + 2] = ar[i] + ar[i + 1];
    }
}

void setFbc(int* ar, int num) {
    for(int i=0; i < num + 1; i++) {
        cout << ar[i];
        if(i != num)
            cout << ", ";
    }
    cout << endl;
}

void inpCyc (int* arr, int cyc) {
    while(!(cyc > 0 && cyc <= 20)){
        cout << "피보나치 연산 횟수 입력 : ";
        cin >> cyc;
    }
    arr = new int[cyc + 2];
    arr[0] = 0;
    arr[1] = 1;
}

int main () { 
    int cyc;
    int* arr;
    
    inpCyc(arr, cyc);
    getFbc(arr, cyc);
    setFbc(arr, cyc);


    delete[] arr;
    return 0;
}