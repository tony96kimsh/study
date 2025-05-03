#include <iostream>
#include <set>

using namespace std;

int main()
{
     int arr[] = {1, 5, 6, 2, 2, 3, 3 };

     set<int> scon;

     for(int i = 0; i < sizeof(arr)/sizeof(arr[0]); i++) {
        scon.insert(arr[i]);
    }

    set<int>::iterator it;

    // key는 중복 제거, 정렬된 상태로 저장
    for(it = scon.begin(); it != scon.end(); it++) {
        cout << *it << endl;
    }

    return 0;

}