#include <iostream>
#include <map>
#include <string>
using namespace std;

struct PhoneAddr
{
    string name;
    int phonenum;
}arPerson[] =
{
    {"홍길동",5151},
    {"김선생",2535},
    {"밧대리",6994},
    {"오징어",7774}
};

int main() 
{
    map <string, int> person;
    map <string, int>::iterator it;
    int i;
    string name;
    for(i=0; i<sizeof(arPerson)/sizeof(arPerson[0]); i++)
    {
        person[arPerson[i].name] = arPerson[i].phonenum;
    }

    for(;;)
    {
         cout << "이름 입력: ",
         cin >> name;
         if(name == "q")break;
         it = person.find(name);
         if(it == person.end())
         {
            cout << "그런 사람은 없습니다." << endl;
         } else
         {
            cout << name << " 의 전화번호는 " << it -> second << "입니다." << endl;
         }

    }
    
    return 0;
}