#include <iostream>

using namespace std;

void Divide(int a, int b) {
    if(b == 0)
        throw b;

    cout << "division result : " << a / b << endl;
}

int main() {
    int a = 0;
    int b = 0;

    cout << "분자numerator 입력: ";
    cin >> a;
    cout << "분모denominator 입력: ";    
    cin >> b;

    
    // if(b == 0) {
    //     cout << "나누는 수가 0일 수 없습니다." << endl;
    //     return 1;        
    // }
    // cout << "division result : " << a / b << endl;

    try
    {
        if(a < 0) {
            throw "나누어질 수가 음수입니다.";
        }
        Divide(a, b);
        
    }
    catch(int exp) // throw값인 b를 전달받음
    {
        cout << "Error!!, 나누는 수에 0이 입력됨" << endl;
    }
    catch (const char* msg) {
        cout << msg << endl;
    }
    
    return 0;
}