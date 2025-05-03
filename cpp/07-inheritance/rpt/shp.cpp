#include <iostream>
using namespace std;

class Shape {
    protected:
     int x;
     int y;
   
    public:
     Shape() { cout << "Shape 생성자호출" << endl; }
     Shape(int x, int y) {
       this->x = x;
       this->y = y;
       cout << "Shape 생성자호출" << endl;
     }
     ~Shape() { cout << "Shape 소멸자호출" << endl; }
     virtual void Draw() { cout << "Shape의 Draw 함수호출" << endl; };
   };
   
   class Square : Shape {
    public:
     Square() { cout << "Square 생성자호출" << endl; }
     ~Square() { cout << "Square 소멸자호출" << endl; }
     void Draw() { cout << "Square의 Draw 함수호출" << endl; }
   };
   
   int main() {
     Square sqr;
     Shape* shape = (Shape*)&sqr;
   
     shape->Draw();

     return 0;
   }