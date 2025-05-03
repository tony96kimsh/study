/*
MousePoint 클래스를 기반으로 한다.

이 클래스를 클래스 템플릿으로 만들어보자.
이 때 멤버변수 x, y는 T형으로 하자.
정수형 객체를 생성하여 실행시켜 보도록 하자.
*/
#include <iostream>
using namespace std;


template <class T>
class MousePoint {
private:
    T x;
    T y;
public:
    MousePoint(T x, T y) {
        cout << "x = " << x << ", " << "y = " << y << endl;
    }
};

int main () {
    MousePoint <int> mp(10, 20);

    return 0;
}