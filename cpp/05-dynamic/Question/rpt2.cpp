/*
앞에서 작성한 Person 클래스를 기반으로 한다. 
배열의 길이가 3인 객체 포인터 배열을 선언하고 각 객체에 이름과 나이 데이터를 대입해보자. 
그리고 대입한 배열의 내용을 모두 출력하자.
ex) Person *pt[3]
*/
#include <iostream>
using namespace std;


class Person {
private:
    char* name;
    int age;
public:
    Person() {
        name = nullptr;
        age = 0;
        cout << "default constructor" << endl;        
    }

    Person(char* name, int age) {
        this -> name = name;
        this -> age = age;
    }
    char* setName () {
        return name;
    }
    int setAge () {
        return age;
    }

    ~Person() {
        cout << "destructure" << endl;
    }
};

int main () {
    Person* ps[3];

    ps[0] =new Person("Kim", 10);
    ps[1] =new Person("Park", 20);
    ps[2] =new Person("Lee", 30);

    for(int i = 0; i < 3; i++)
    {
        cout << "name : " << ps[i]->setName() << "Age : " << ps[i]->setAge() << endl;
    }

    // 동적 할당된 객체 메모리          
    for(int i = 0; i < 3; i++) {
        delete ps[i];        
    }

    return 0;
}