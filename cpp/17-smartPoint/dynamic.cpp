#include <iostream>

using namespace std;

int main()
{
    double* rate = new double();
    *rate = 3.14;
    cout << *rate << endl;
    delete rate;

    return 0;
}