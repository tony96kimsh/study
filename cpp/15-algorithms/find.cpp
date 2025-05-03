#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int main()
{
    int arr[] = {10, 20, 30, 40, 50};
    vector<int> vec(&arr[0], &arr[5]);
    vector<int>::iterator it;

    if (find(vec.begin(), vec.end(), 30) != vec.end())
    {
        cout << "검색 성공" << endl;
    }
    else
    {
        cout << "검색 실패" << endl;
    }
    
    return 0;
}
