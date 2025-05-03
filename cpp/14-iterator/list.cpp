#include<iostream>
#include<list>

using namespace std;

int main()
{
    // 리스트에서 반복자
    list<int> lst;
    list<int>::iterator it;

    for(int i = 0; i< 5; i++) {
        lst.push_back(i + 1);
    }
    for(it = lst.begin(); it != lst.end(); it++)
    {
        cout << *it << endl;
    }

    return 0;
}