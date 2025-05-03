/*
앞에서 작성한 Shape 클래스를 기반으로 한다.
사각형을 그리는 클래스 Rectangle를 상속 받아 Square이라는 이름의 클래스를 작성한다. 
즉, 클래스 상속 구조는 Shape – Rectangle – Square가 되도록 한다.
	
	1. Square 클래스를 작성하시오.
	2. Shape, Rectangle, Square 각 클래스의 생성자에 
	 cout<<"Shape 생성자호출"<<endl;
	    
와 같은 코드를 추가하여 생성자 호출 순서를 출력하도록 작성한다.
소멸자도 동일한 방식으로 작성한다. 	
*/
#include <iostream>
using namespace std;

class Shape {
public:
    Shape(){
        cout << "Construct Shape" << endl;
    }
    ~Shape() {
        cout << "destruct Shape" << endl;
    } 
};

class Rectangle:Shape {
public:
    Rectangle() {
        cout << "construct Rectangle" << endl;
    }
    ~Rectangle() {
        cout << "destruct Rectangle" << endl;
    } 

};

class Square:Rectangle {
public:
    Square() {
        cout << "construct Square" << endl;
    }
    ~Square() {
        cout << "destruct Square" << endl;
    } 
};

int main () {
    Square sq;
    return 0;
}