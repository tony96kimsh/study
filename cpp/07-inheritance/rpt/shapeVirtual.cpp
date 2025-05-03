#include <iostream>
using namespace std;

class Shape {
public:
    Shape() {
      cout << "생성자 >> 부모 Shape 출력" << endl;
    }
    void Draw() {
        cout << "부모 >> Shape의 Draw 함수호출" << endl;
    }
private:
};

class Square
: public Shape  
{
public:
    Square() {
      cout << "생성자 >> 자식 Square 출력" << endl;
    };
    void Draw() {
        cout << "자식 >> Square Draw 함수호출" << endl;
    }

private:
};

int main () { 
    Shape sp;
    Square sq;

    sq.Draw();
    
    return 0;
}