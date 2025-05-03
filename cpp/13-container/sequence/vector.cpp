#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // int num = 0;
    // cin >> num;
    vector<int> arr(5);
    
    {
    for(int i = 0; i < 10; i++) 
        // arr[i] = 10 * (i + 1);
        arr.push_back((i + 1) * 10);
    }
    // for(int i = 0; i < 5; i++) 
    // {
    //     cout << arr[i] << endl;
    // }


    vector<int>::iterator it;

    for(it = arr.begin(); it != arr.end(); it++) {
        cout << *it << endl;
    }

    return 0;
}