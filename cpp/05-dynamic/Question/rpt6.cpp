/*
도형을 그리는 클래스를 한 개 정의한다.
클래스 이름은 Shape라고 하자. 
도형을 그릴때는 반드시 기준좌표(중심좌표) x, y가 필요하다. 클래스 Shape의 멤버변수로 기준좌표 x, y를 포함한다.

Shape 생성자는 전달인자 두 개를 갖도록 하고, 생성자에서 멤버변수를 초기화한다.
Shape 클래스를 정의해보자. 
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
};
int main () {

    Shape sp(10, 20);

    cout << "/" << sp.setX() << endl;
    cout << "/" << sp.setY() << endl;

    return 0;
}