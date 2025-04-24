#include <iostream>
using namespace std;

int main() {
    int *pBuffer; //declare pointer variable to save address
    int nLength;
    
    cout << "memory count allocate heap segment : ";
    cin >> nLength;
    pBuffer = new int[nLength];
    
    for(int i = 0; i < nLength; i++) {
        pBuffer[i] = i + 1;
    }

    for(int i = 0; i<nLength; i++) {
        cout << pBuffer[i] << " ";
    }

    cout << endl;

    delete[] pBuffer;

    return 0;
}