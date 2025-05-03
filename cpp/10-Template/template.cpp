/*1. class tamplate
2. pop, push 구현
3. 타입에 따라 달라지지 않는 알고리즘 CStack
*/
#include <iostream>
using namespace std;

// template<class T>

// class CStack {
// public:
//     CStack(T sz) {
//         size = sz;
//         p = new T[size];
//     }
//     ~CStack() {
//         delete[] p;
//     }
//     void push(T a) {
//         *p++ = a;
//     }
//     T pop() {
//         return *(--p);
//     }

// private:
//     T* p;
//     int size;   
// };

// int main() 
// {
//     CStack<int> sp(5);
//     for(int i = 0; i < 5; i++) {
//         sp.push(i + 1);
//     }

//     for(int i = 0; i < 5; i++) {
//         cout << sp.pop() << endl;
//     }
    

//     return 0;
// }


// template function

template <class T>
T Max(T a, T b)
{
    return (a > b) ? a : b;
}

template <class T>

// 메모리 공유 : 선언 시 & (int& a)
// void Swap(T& a, T& b)
// {
//     T temp = 0;
//     temp = a;
//     a = b;
//     b = temp;
// }
void Swap(T& a, T& b)
{
    T temp = 0;
    temp = a;
    a = b;
    b = temp;
}
int main() {
    int x = 10, y = 20;
    char a = 'A', b = 'B';

    cout << Max(x, y) << endl;
    cout << Max(a, b) << endl;

    cout << x << ", " << y << endl;
    Swap(x, y);
    cout << x << ", " << y << endl;

    return 0;
}