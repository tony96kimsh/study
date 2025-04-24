#include <iostream>
using namespace std;

class String
{
public:
    String(char ch, int nSize);
    ~String();
    void operator=(const String& s);
    void SetData();
private:
    int nLength;
    char *pBuffer;
};

String::String(char ch, int nSize)
{
    nLength = nSize;
    pBuffer = new char[nLength + 1];
    memset(pBuffer, ch, nLength);
    pBuffer[nLength] = '\0';
}

String::~String()
{
    delete[] pBuffer;
}

void String::operator=(const String& s)
{
    if(&s == this)
        return;
    delete pBuffer;
    nLength = s.nLength;
    pBuffer = new char[nLength + 1];
    strcpy(pBuffer, s.pBuffer);
}

void String::SetData()
{
    cout << "pBuffer: " << this->pBuffer << endl;
    cout << "nLength: " << this->nLength << endl;
}


int main() {
    String str1('A', 3), str2('B', 5);
    cout << "대입 전 str1";
    str1.SetData();
    
    str1 = str1;
    cout << "대입 후 str1";
    str1.SetData();

    return 0;
}