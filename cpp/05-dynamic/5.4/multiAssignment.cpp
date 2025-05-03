#include <iostream>
using namespace std;

class String
{
public:
    String(char ch, int nSize);
    ~String();
    String& operator=(const String& s);
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
    delete pBuffer;
}
String& String::operator=(const String& s)
{
    if(&s == this)
        return *this;
    delete pBuffer;
    nLength = s.nLength;
    pBuffer = new char[nLength + 1];
    strcpy(pBuffer, s.pBuffer);
    return *this;
}
void String::SetData()
{
    cout << endl;
    cout << "pBuffer: " << this->pBuffer << endl;
    cout << "nLength: " << this->nLength << endl;

}


int main() {
    String str1('A', 3), str2('B', 3), str3('C', 4);
    cout << "before assign str1";
    str1.SetData();
    str1 = str2 = str3;
    cout << "after assign str1";
    str1.SetData();

    return 0;
}