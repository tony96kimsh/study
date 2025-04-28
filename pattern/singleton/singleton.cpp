#include<iostream>
 
using namespace std;

class SingletonClass
{
private:
    static SingletonClass instance; // 정적 변수, 정적 싱글톤
    SingletonClass() {
       
    }
    
public:
     ~SingletonClass() {

     }
    static SingletonClass& getInstance() {
        return instance;
    }
    void ShowMessage() {
        cout << "싱글톤 패톤" << endl;
    }
};

SingletonClass SingletonClass::instance;

int main() {
    SingletonClass::getInstance().ShowMessage();
    
    return 0;
}