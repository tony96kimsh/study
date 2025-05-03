#include <iostream>
using namespace std;

class Employee {
   public:
    Employee();
    Employee(char* strName, char* strAddr);
    ~Employee();
    void Display();

   private:
    char* pName;
    char* pAddr;
};

Employee::Employee() {
    pName = NULL;
    pAddr = NULL;
}

Employee::Employee(char* strName, char* strAddr) {
    cout << "인자가 2개인 생성자 호출" << endl;
    pName = new char[strlen(strName) + 1];
    pAddr = new char[strlen(strAddr) + 1];
    strcpy(pName, strName);
    strcpy(pAddr, strAddr);
}

Employee::~Employee() {}

void Employee::Display() {
    cout << "이름 :" << pName << endl;
    cout << "주소 :" << pAddr << endl;
}

class Developer: public Employee {
public:
    Developer();
    ~Developer();
    Developer(char* strName, char* strAddr, char* strRole);
    void Display();
private:
    char* pRole;
};

Developer::Developer(char* strName, char* strAddr, char* strRole):
Employee(strName, strAddr) {
    cout << "Developer constructor" << endl;
    pRole = new char[strlen(strRole) + 1];
    strcpy(pRole, strRole);
}

Developer::~Developer() {
    delete[] pRole;
}

void Developer::Display() {
    Employee::Display();
    cout << "프로그래밍 언어 : " << pRole << endl;
}


int main() {
    Developer dev("Tony", "Daegu", "C++");
    dev.Display();

    return 0;
}