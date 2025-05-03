/*
싱글톤 클래스를 기반으로 한다. 
싱글톤 클래스에서 인스턴스 생성 시 동적으로 전달인자를 설정하고,
생성자에 해당 값을 전달하여 total의 초기값으로 설정하도록 한다. 
total의 값을 출력하라
*/
#include <iostream>
using namespace std;


class Sgt {
private:
    Sgt(){}
    static int total;
    static Sgt* pist;
public:
    ~Sgt(){}
    static Sgt* getInstance(int value = 10){
        if(pist == NULL){
            pist = new Sgt();
            total = value;
        }
        
        return pist;
    }
    void setTotal(int num) {
        total = num;
    }
    int getTotal(){
        return total;
    }
};

Sgt* Sgt::pist = NULL;
int Sgt::total = 0; // 정적 멤버는 클래스 외부에서 한 번 반드시 정의(내부 선언만 가능)

int main () {
    Sgt* ist1 = Sgt::getInstance(20);
    Sgt* ist2 = Sgt::getInstance(40); // 선언으로 값 변경 불가
    Sgt* ist3 = Sgt::getInstance(55);

    cout << "생성자 값" << endl;
    cout << ist1 -> getTotal() << endl;    
    cout << ist2 -> getTotal() << endl;
    cout << ist3 -> getTotal() << endl;

    cout << "멤버함수 포인터 간접접근" << endl;
    ist1 -> setTotal(30);
    cout << ist1 -> getTotal() << endl;    
    cout << ist2 -> getTotal() << endl;
    cout << ist3 -> getTotal() << endl;    


    return 0;
}