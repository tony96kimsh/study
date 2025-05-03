/*
String 클래스를 기반으로 한다.
MyString 클래스라는 이름으로 새로 생성한다. 
기능은 String과 동일하다. 

두 개의 객체 str1과 str2를 선언한다.
이 때 str1 생성 시 생성자의 전달인자는 (‘A’, 5),
str2 생성 시 생성자의 전달인자는 (‘Z’, 10) 이라고 하자. 

이 때 str1에 str2를 대입한다. (str1 = str2) 그리고, 대입이 된 str1의 멤버변수를 화면에 출력하자.
대입 시 문제가 발생하였다면 대입 연산자 오버로딩을 통해 문제를 해결하도록 한다.
*/
#include <iostream>
using namespace std;

class MyString {
private:
    char* ch;
    int size;
public:
    MyString(char c, int s) {
        size = s;
        ch = new char[size + 1];
        memset(ch, c, size);
        ch[size] = '\0';

        cout << ch << endl;

    }
    ~MyString() {
        delete[] ch;
    }
    MyString& operator=(const MyString& s)
    {
        if(&s == this)
            return *this;
        delete ch;
        size = s.size;
        ch = new char[size + 1];
        strcpy(ch, s.ch);
        return *this;
    }
    
};

int main() {
    MyString str1('A', 5);
    MyString str2('B', 10);

    str1 = str2;

    return 0;
}