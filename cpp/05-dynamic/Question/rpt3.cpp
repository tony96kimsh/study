/*
Counter 클래스를 정의하고, 모든 객체에서 공유할 수 있는 static 멤버 변수 count를 선언하라.
count의 초기값은 10으로 하고, main() 함수에서 count 값을 출력해보자.
*/
#include <iostream>
using namespace std;


class Counter {
private:
    static int count; // 정적 변수 선언
public:
    Counter() {
        cout << "default constructure" << endl;
        count = 10;
    }
    static void addCount () {
        count = count + 1;
    }
    static int getCount () {
        return count;
    }
};

// static 멤버 함수는 객체 없이도 호출 가능
int Counter::count = 10;

int main () {
    cout << "Initial Count: " << Counter::getCount() << endl;

    Counter::addCount();
    cout << "Count : " << Counter::getCount() << endl;
    Counter::addCount();
    cout << "Count : " << Counter::getCount() << endl;
    
    return 0;
}