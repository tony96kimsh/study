// String class 만들기
#include <iostream>
#include <string>
using namespace std;

class  String
{
private:
    char* pbuf;
    int len;
public:
    String(){}
    ~String()
    {
        delete[] pbuf;
    }
    String(char ch, int nSize){
        len = nSize; // why using member variable instead to use argument => for code quality
        new char[len + 1]; // string last value is null('\0')

        memset(pbuf, ch, len); // c memory std function
        pbuf[len] = '\0';
        
        // cout << pbuf << endl;
        // cout << len << endl;
    }
    void operator = (const String& s) // '=' 오버로딩을 위해 operator 키워드 키재 
    {
        //2. 메모리 사이즈를 복사
        this->len = s.len;
        //3. 새로운 메모리 할당
        this->pbuf = new char[this -> len + 1];
        // 4. 데이터 복사
        strcpy(this->pbuf, len+1, s.pbuf);
    }
    String (const String)
    {
        if(&s == this)
            return;
        //1. 기존 메모리 해제
        delete[] this->pbuf;
        //2. 메모리 사이즈를 복사
        this->len = s.len;
        //3. 새로운 메모리 할당
        this->pbuf = new char[this -> len + 1];
        // 4. 데이터 복사
        strcpy
    }

    void getData()
    {
        cout << this->pbuf << endl;
        cout << this->len << endl;
    }
};

int main()
{
//   String str1('A', 3);
//   String str2('5', 5);

//   // duplicate object
//   str2.getData();

//   str2 = str1;
//   str2.operator=(str1); // same `str2 = str1`

//   str2.getData();

    String str1('A', 3);
    String str2(str1); //str2 = str1 동일한 표현
  return 0;
}