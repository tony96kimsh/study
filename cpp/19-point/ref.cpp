#include <iostream>

using namespace std;

void printDouble (const double& rd) {
    cout << rd;
}

void printDouble (const double* pd) {
    if (pd) { // NULL check
        cout << *pd;
    }
}

void main() 
{
    //  string& rs; // err!!
    string s("abc");
    string& rs = s;

    double pi = 3.14;


    printDouble(&pi);
}