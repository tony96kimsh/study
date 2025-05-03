#include <iostream>

using namespace std;


class Employee {
public:
    Employee() {
        strName = NULL;
        strAddr = NULL;
    }
    ~Employee() {
         delete[] strName;
         delete[] strAddr;
    }
    Employee(const char* pName, const char* pAddr) {
        strName = new char[strlen(pName) + 1];
        strAddr = new char[strlen(pAddr) + 1];
        
        strcpy(strName, pName);
        strcpy(strAddr, pAddr);

        strName[strlen(pName) + 1] = '\0';
        strName[strlen(pAddr) + 1] = '\0';
    }
    virtual double PayCheck() = 0;
    void DisplayEmployee() {
        cout << "이름: " << strName << ", 주소: " << strAddr << endl;
    }
protected:
    char* strName;
    char* strAddr;
};
class Department {
private:
    Employee* employee[10];
    int count;
public:
    Department() {
        count = 0;
    }
    void AddEmployee(Employee& emp) {
        this -> employee[count] = & &emp;
        count++;
    }
    void Display() const {
        for (int i = 0; i < count; i++) {
            cout << "급여" << employee[i] -> PayCehck() << endl;
        }
    }
};

class Regular : Employee
{
public:
    Regular() {
    }
    Regular(char* pName, char*  pAddr, double pSalary) : Employee(pName, pAddr)
    {
        salary = pSalary;

        cout << "이름: " << strName << ", 주소: " << strAddr << endl;
    }
    ~Regular() {

    }
    double PayCheck() {
        return salary;
    }
private:
    double salary;
};

class SalesMan : public Regular
{
public:
    SalesMan(){}
    ~SalesMan(){}
    SalesMan(char* pName, char*  pAddr, double pSalary, double allowance)
        :Regular(pName, pAddr, pSalary)
    {
        this->allowance = allowance;
    }
    double Paycheck() {
        return Regular::PayCheck() + allowance;
    }
private:
    double allowance;

};

class Temporary : public Employee
{
public:
    Temporary() {

    }
    Temporary(const char* pName, const char* pAddr, double pDailyPay, int pDays) : Employee(pName, pAddr) {

        dailyPay = pDailyPay;
        days = pDays;

        cout << "이름: " << strName << ", 주소: " << strAddr << endl;
    }
    ~Temporary() {

    }
    double PayCheck() {
        return days * dailyPay;
    }
private:
    double dailyPay;
    int days;
};



int main () {
    // Employee emp("Kim", "seoul");
    // emp.DisplayEmployee();

    Regular rgl("park", "Deagu", 300);
    cout << "ㄴ 정규직원 급여: "<< rgl.PayCheck() << endl;

    Temporary tmp ("choi", "Bundang", 20, 30);
    cout << "ㄴ 계약직원 급여: " << tmp.PayCheck() << endl;

    SalesMan slm("Kim", "Busan", 300, 100);
    cout << "ㄴ 영업사원 급여: " << slm.PayCheck() << endl;

    // 부모객체 = 자식객체
    Employee* emp = (Employee*)&rgl;
    cout << emp->PayCehck() << endl;

    Department dept;
    dept.AddEmployee(rgl);
    dept.AddEmployee(tmp);
    dept.AddEmployee(slm);
    return 0;
}