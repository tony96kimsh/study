#include <iostream>

using namespace std;

int main()
{
    int* a;
    int b;
    cout << "나누는 수 입력 : ";
    cin >> b;

    try {
        a = new int(10); // int[10]가 다름. 10을 값으로 넣는 형태

        if (b == 0)
            throw b;
        cout << "나누기 결과" << *a / b << endl;
        delete a;
    }
    catch (int ex) {
        cout << "나누어야 할 수는 " << ex << "이므로 연산 수행 불가" << endl;
    }

    return 0;
}
