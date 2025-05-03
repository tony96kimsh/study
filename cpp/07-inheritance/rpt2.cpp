/*
앞에서 작성한 Shape 클래스를 기반으로 한다.
자식 클래스의 객체 포인터를 부모 클래스의 객체 포인터로 넘겨받아 멤버함수를 호출하도록 한다.
Shape 클래스 내부에 Draw() 함수를 추가한다. 함수 내부의 구현은 로 한다.
부모 클래스는 Shape이고, 자식 클래스는 Square로 지정한다.
부모 클래스의 객체 포인터로 Draw() 함수를 호출하는 코드를 작성하자.
*/

#include <iostream>
using namespace std;

class Shape {
public:
    Shape() {}
    void Draw() {
        cout << "Shape의 Draw 함수호출" << endl;
    }
private:
};

class Square
: public Shape  
{
public:
    Square() {};
private:
};

int main () {
    // 자식 클래스의 객체 포인터를 부모 클래스의 객체 포인터로 넘겨받아 멤버함수를 호출
    // 부모 클래스 객체 포인터
    Shape* pSh;
    Square sq;
    cout << "pSh" << pSh  << "/ &sq" << &sq << endl;
    // 자식 포인터 변수 값 부모 개체로 지정
    pSh = &sq;
    cout << "pSh" << pSh  << "/ &sq" << &sq << endl;
    
    pSh->Draw();    

    return 0;
}