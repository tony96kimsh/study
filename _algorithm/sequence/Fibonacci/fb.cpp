#include <iostream>
using namespace std;

int cycle = -1;

int main ()
{
    cout << "cycle : ";

    while(cycle < 0 || cycle > 20) {
        cin >> cycle;
    }

    cout << cycle << endl;
}