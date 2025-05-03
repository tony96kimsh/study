// 늦은 초기화
#include<iostream>
 
using namespace std;

class SingletonClass
{
private:
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
};

SingletonClass* SingletonClass::pinstance = NULL;

int main() {
    SingletonClass::getInstance()->ShowMessage();//instance
    // 늦은 초기화
    return 0;
}