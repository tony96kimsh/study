#include <iostream>
#include <memory>
using namespace std;

int main()
{
    // auto_ptr<double> rate(new double); // 구식
    shared_ptr<double> rate(new double);
    *rate = 3.14;
    cout << *rate << endl;


    return 0;
}