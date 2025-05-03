#include <iostream>

using namespace std;

void main() 
{
    int** pp = new int* [3];

    for (int i = 0; i < 3; i++) {
        pp[i] = new int[2];
    }

    // 어쩌구 저쩌구 수행
    for (int i = 0; i < 3; i++) {
        delete[] pp[i];
    }
    delete[] pp;
}