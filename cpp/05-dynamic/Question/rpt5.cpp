/*
앞의 Counter 클래스를 기반으로 한다.
생성자와 소멸자를 작성 후 생성된 객체의 수를 추적하는 코드를 작성하라.
객체 생성 갯수만큼 count가 증가하고, 객체 소멸 갯수만큼 count가 감소하도록 작성한다. 
그 결과를 화면에 출력하라.
*/
#include <iostream>
using namespace std;

class Counter {
private:
    static int count;
public:
    Counter() {
        count++;
        cout << "constructure: "<< count << endl;
    }

    ~Counter() {
        count--;
        cout << "destructure" << count << endl;
    }
}

int main () {
    Counter::count = 0;

    Counter ct[5];
    return 0;
}