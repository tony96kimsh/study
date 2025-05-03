#include <iostream>
using namespace std;

class Employee {
   public:
    Employee();
    Employee(char* szName, char* szAddr);
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

Employee::~Employee() {
    delete[] pName;    
    delete[] pAddr;    
}

void Employee::Display() {
    cout << "이름 :" << pName << endl;
    cout << "주소 :" << pAddr << endl;
}

class Manager : public Employee {
public:
    Manager();
    ~Manager();
    Manager(char* strName, char* strAddr, char* strRole);
    void Display();  // Manager에서 Display를 오버라이드
    
private:
    char* pRole;
};

Manager::Manager(char* strName, char* strAddr, char* strRole) : Employee(strName, strAddr) {
    cout << "Manager 생성자 호출" << endl;
    pRole = new char[strlen(strRole) + 1];
    strcpy(pRole, strRole);
}
Manager::~Manager() {
    delete[] pRole;    
}

void Manager::Display() {
    Employee::Display();
    cout << "직책 : " << pRole << endl;
}


/** 22Mar Tony
    1. : Manager Class를 통해 Employee constructor를 실행해보자 */ 
int main() {
    Manager mgr("Kim", "Daegu", "관리");
    mgr.Display();

    return 0;
}