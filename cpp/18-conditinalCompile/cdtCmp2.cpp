#include<iostream>
#include<list>
#include<vector>

using namespace std;

// #define LIST

int main() 
{
    int i;
#ifdef LIST
    list<int> lst;
    list<int>::iterator it;
#else
    list<int> lst;
    list<int>::iterator it;
    // 일반 기능
    cout << "일반 모드 실행" << endl;
    
#endif
    for(int i = 0; i < 5; i++) {
        lst.push_back(i + 1);
    }
    for(it = lst.begin(); it!=lst.end(); it++) {
        cout << *it << endl;
    }

return 0;
}