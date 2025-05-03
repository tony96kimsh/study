/*
String Ŭ������ ������� �Ѵ�.
MyString Ŭ������� �̸����� ���� �����Ѵ�. ����� String�� �����ϴ�.

�� ���� ��ü str1�� str2�� �����Ѵ�.

�� �� str1 ���� �� �������� �������ڴ� (��A��, 5), str2 ���� �� �������� �������ڴ� (��Z��, 10) �̶�� ����.
�� �� str1�� str2�� �����Ѵ�. (str1 = str2) �׸���, ������ �� str1�� ��������� ȭ�鿡 �������.
���� �� ������ �߻��Ͽ��ٸ� ���� ������ �����ε��� ���� ������ �ذ��ϵ��� �Ѵ�.
*/
#include <iostream>
using namespace std;

class MyString {
private:
    char ch;
    int size;
public:
    MyString() {
        ch = ' ';
        size = 0;
    }
    MyString(char a, int b) {
        this->ch = a;
        this->size = b;             
    }
    void setValue() {
        cout << "ch : " << ch << " / size: " << size << endl;
    }
    
};

int main() {
    MyString str1('A', 5);
    MyString str2('Z', 10);

    //str1 = str2;

    str1.setValue();

    return 0;
}