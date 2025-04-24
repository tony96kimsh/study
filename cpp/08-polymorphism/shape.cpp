#include <iostream>
using namespace std;

class Shape {
public:
    Shape() {}
    // 자식 포인터로 받았을 때, 자식 함수를 호출하고 싶다면 virtual 을 사용한다.
    /*
    void Draw() {
        cout << "부모 Draw" << endl;
    }
    */
    

    /*
    정의부가 없는 가상함수를 순수가상함수이며,
     정의부가 필요없을 때 0을 대입하면 된다.
    */
    virtual void Draw() = 0;
private:
};

class Square
: public Shape  
{
public:
    Square() {};
    void Draw() {
        cout << "자식 Draw()" << endl;            
    }

private:
};

int main () { 
    
    // 부모 포인터 객체로 자식 객체 주소값을 받는다.
    Shape* pShp;
    Square sqr;
    pShp = (Shape*)&sqr;


    // 넘겨받은 개체 클래스의 멤버함수를 호출하도록 한다.
    cout << "pShp->Draw(): ";
    pShp->Draw(); // 부모를 virtual 함수를 통한 자식 함수 호출
    cout << "sqr.Draw(): ";
    sqr.Draw(); // 직접 자식 함수 호출

/*
- 왜 부모 객체가 자식 멤버 함수를 받는 형태로 만들까?
결과 값은 객체마다 달라진다. 
여러 객체가 있을 때 오버라이딩된 함수를 통해 결과값을 출력하도록 작성할 수 있다. 
즉 객체값만으로 결과를 출력할 수 있다.
*/

    
    return 0;
}