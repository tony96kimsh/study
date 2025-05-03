/*
앞의 Counter 클래스를 기반으로 한다.
Counter 클래스에 count를 1씩 증가시키는 함수를 작성하고,
main() 함수 안에서 이 함수를 호출 및 count 값을 출력해보자. 
1씩 증가하는 함수 이름은 Increase() 라고 하자.
*/
#include <iostream>
using namespace std;

class Counter {
private:
    int count = 1;
public:
    Counter () {
        cout << "default construct" << endl;
    }
    void Increase () {
        count += 1;
    }
    void getCount() {
        cout << "count : " << count << endl;

    }
}; 


int main () {
    Counter ct;

    ct.getCount();

    ct.Increase();
    ct.getCount();

    ct.Increase();
    ct.getCount();
    
    return 0;
}