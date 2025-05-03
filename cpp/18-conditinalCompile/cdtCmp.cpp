#include<iostream>

using namespace std;

#define professional

int main() {
    #ifdef professional
        // 고급기능
        cout << "전문가 모드 실행" << endl;

    #else
        // 일반 기능
        cout << "일반 모드 실행" << endl;
        
    #endif

        // 공통코드 80%

    return 0;
}