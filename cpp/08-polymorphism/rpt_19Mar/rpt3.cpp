#include <iostream>
using namespace std;

class Employee {
   public:
    Employee();
    Employee(char* szName, char* szAddr);
    virtual ~Employee();
    virtual void Display();

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
        void Display();
    
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
        Employee::Display();  // 부모 클래스의 Display를 호출
        cout << "직책 : " << pRole << endl;
    }
    
    int main() {
        Manager mgr("Kim", "Daegu", "관리");

        // Employee 포인터로 mgr을 가리킴
        Employee* emp = &mgr; 
        // (Employee*) &mgr;가 아닌 &emp로 사용 가능: 파생 클래스 객체는 기본 클래스 객체로 암시적 형 변환이 가능


        emp->Display();  // 가상 함수가 아니라면 Employee::Display()가 호출


        return 0;
    }
    