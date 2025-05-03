/*
앞에서 작성한 Shape 클래스를 기반으로 한다.
사각형을 그리는 클래스(Rectangle)와 원을 그리는 클래스(Circle)를 작성하되, 
Shape를 상속받아 작성한다.

사각형을 그리기 위해서는 기준좌표(x, y)와 넓이(width), 높이(height) 정보만 있으면 된다.
원을 그리기 위해서는 기준좌표 (x, y)와 반지름(r)이 있으면 된다.

그리고 멤버함수 Draw()를 정의하는데, 두 클래스에 모두 정의한다. 

Draw()의 기능은 Rectangle의 경우 x, y, w, h를 출력하고, 
Circle의 경우 x, y, r의 값을 출력하게 구현한다.
Rectangle 클래스와 Circle 클래스를 정의해보자. 
*/

#include <iostream>
using namespace std;

class Shape {
private:
    int x;
    int y;
public:
    Shape() {
        x = 0;
        y = 0;
    }
    Shape(int x, int y) {
            this->x = x;
            this->y = y;
    }
    int setX() {
        return x;
    }
    int setY() {
        return y;
    }
    void Draw(int x, int y, int w, int h) {
        cout << x << ", " << y << ", " << w << ", " << h << endl;
    }
    void Draw(int x, int y, int r) {
        cout << x << ", " << y << ", " << r << endl;
    }
};


class Rectangle : Shape {
public:
    Rectangle(int x, int y, int w, int h) : Shape(x, y) {
        width = w;
        height = h;

        Draw(x, y, width, height);
    }
private:
    int width;
    int height;
};
class Circle : Shape {
public:
    Circle(int x, int y, int r) : Shape(x, y) {
        radius = r;
        Draw(x, y, r);
    
    }
private:
    int radius;
};

int main () {
    Circle cc(1, 2, 3);
    Rectangle rc(4, 3, 2, 1);
    
    return 0;
}
