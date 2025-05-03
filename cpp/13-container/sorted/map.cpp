#include <iostream>
#include <map>
#include <string>

using namespace std;

struct PhoneAddr {
    string name;
    int pnum;
}arPerson[] = {
    {"김대리", 1234}, {"박과장", 5678}, {"홍대리", 2345}
}; //구조체에서 초기값을 줄 때, 자료형과는 상관없이 "멤버 선언 순서"대로 값이 들어간다는 게 핵심

int main()
{
    map<string, int> person;
    // 구조체 배열 맵에 넣기
    for(int i = 0; i < sizeof(arPerson)/sizeof(arPerson[0]); i++)
    {
        person[arPerson[i].name] = arPerson[i].pnum;
    }

    map<string, int> :: iterator it;
    string name;
    cout << "이름 검색 : ";
    cin >> name;

    it = person.find(name);

    if (it == person.end())
    {
        cout << "찾을 수 없습니다." << endl;
    }
    else
    {
        // it 는 포인터 이므로 간접참조연산자 사용
        // map객체의 first는 키, second는 value
        cout << name << "의 전화번호는 " << it-> second << "입니다." << endl;
    }

    return 0;
}