#include<iostream>

using namespace std;

template <class T>
class SmartPointer {
private:
    T* p;

public:
    SmartPointer(T* sp) {
        p = sp;
    }
    ~SmartPointer() {
        cout << "소멸" << endl;
        delete p;
    }    
    T operator*() const {
        return *p;
    }
    T* operator->() const {
        return p;
    }
};

int main()
{
    SmartPointer<string> pStr(new string("test"));
    // ptr 사용
    cout << *pStr << endl;
    cout << pStr->length() << endl;

    return 0;
}