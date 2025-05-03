#include<iostream>
#include<list>

using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 4, 5};
    vector<int> vArr(&arr[0], &arr[5])
    vector<int>::iterator it;
    
    for(it = vArr.begin(); it != vArr.end(); it++)
    {
        cout << *it << endl;
    }

    return 0;
}