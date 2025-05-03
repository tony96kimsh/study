#include <iostream>
#include <deque>

using namespace std;

int main()
{
    // int num = 0;
    // cin >> num;
    deque<int> dq;

    dq.push_back(5);
    dq.push_back(6);
    dq.push_back(2);
    dq.push_back(1);

    for(int i = 0; i < 5; i++) 
    {
        dq.push_back((i + 1) * 10);
    }
    for(int i = 0; i < dq.size; i++) 
    {
        cout << arr[i] << endl;
    }

    return 0;
}