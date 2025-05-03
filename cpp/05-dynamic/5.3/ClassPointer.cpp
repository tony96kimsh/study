/*
Question) create String class
1 step - get two argument char type, int type on constructure. and 
2 step - Print an array filled with the input character repeated as many times as the input integer. (use memset()

e.g 
#include <iostream>
using namespace std;

class String {
public:
String(char ch, int num);
~String();
private:
    int size;
    char *pBuffer;
};


String::String(char ch, int num) {
}

String::~String() {
}


int main () {
    String str1('A, 5');

    return 0;
}

*/
#include <iostream>
using namespace std;

class String {
public:
String(char ch, int num);
~String();
private:
    int size;
    char *pBuffer;
};


String::String(char ch, int num) {
    size = num;
    pBuffer = new char[size + 1];
    memset(pBuffer, ch, size);
    pBuffer[size] = '\0';
    
    cout << "pBuffer: " << pBuffer << ", " << "size: " << size << endl;
}

String::~String() {
    delete[] pBuffer;
}


int main () {
    String str1('A', 5);
    return 0;
}
