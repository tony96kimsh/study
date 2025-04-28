// 늦은 초기화
#include<iostream>
 
using namespace std;

class SingletonClass
{
private:
    int total;
    static SingletonClass* pinstance; // 정적 변수, 정적 싱글톤
    SingletonClass() {
       
    }
    
public:
     ~SingletonClass() {
     }
    static SingletonClass* getInstance() {
        if(pinstance == NULL)
        {
            pinstance = new SingletonClass();
        }
        return pinstance;
    }
    void ShowMessage() {
        cout << "싱글톤 패턴" << endl;
    }
    void addValue(int value) {
        total = total + value;
    }
    int getTotalValue() {
        return total;
    }
    void destroy () {
        if(pinstance != NULL) {
            delete pinstance;
            pinstance = NULL;
            cout<<"pInstance 해제" << endl;
        }
    }
    
};

SingletonClass* SingletonClass::pinstance = NULL;

int main() {
    // SingletonClass::getInstance()->ShowMessage();//instance
    SingletonClass *ins1 = SingletonClass::getInstance();
    SingletonClass *ins2 = SingletonClass::getInstance();
    SingletonClass *ins3 = SingletonClass::getInstance();


    ins1->addValue(10);
    cout << "total : " << ins1 -> getTotalValue()  << endl;
    ins2->addValue(10);
    cout << "total : " << ins2 -> getTotalValue()  << endl;
    ins3->addValue(10);
    cout << "total : " << ins3 -> getTotalValue()  << endl;

    SingletonClass::getInstance() -> destroy();
    return 0;
}