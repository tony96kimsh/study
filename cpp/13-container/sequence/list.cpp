#include <iostream>
#include <list>

using namespace std;

int main()
{
    // int num = 0;
    // cin >> num;
    list<int> lst;

    lst.push_back(5);
    lst.push_back(6);
    lst.push_back(2); 
    lst.push_back(1);

    list<int>::iterator it;

    for(it = lst.begin(); it != lst.end(); it++) {
        cout << *it << endl;
    }

    return 0;
}