/* 
앞에서 작성한 Person 클래스를 기반으로 한다.
Person 클래스로 객체 배열을 new 연산자를 사용하여 동적으로 생성
한 후 각 요소에 이름과 나이의 값을 각각 대입하라. 
그리고 배열의 요소를 모두 출력하라. 
new, delete 사용에 주의할 것.
*/
#include <iostream>
using namespace std;

class Person {
private:
    char* name; // how allocate instead string type
    int age;
public:
    Person() {        
        name = 0;
        cout << "call/allocate default construct" << endl;
    }
    ~Person() {
        cout << "deconstruct" << endl;    
    }
    void getName (char* name) {
        this -> name = name;
    }
    void getAge (int age) {
        this -> age = age;
    }

    char* setName() {
        return name;
    }
    int setAge () {
        return age;
    }
};

int main () {
    int size = 3;
    Person* ps = new Person[size];

    ps[0].getName("kim");
    ps[0].getAge(10);
    ps[1].getName("lee");
    ps[1].getAge(20);
    ps[2].getName("choi");
    ps[2].getAge(30);

    for(int i = 0; i < size; i++)
    {
        cout << "Name : " << ps[i].setName() << "Age : " << ps[i].setAge() << endl;
    }
    delete[] ps;

    return 0;
}