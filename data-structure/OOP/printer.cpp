/*
1.step 모든 프린터는 모델명(model), 제조사(manufacturer), 인쇄 매수(printedCount), 
인쇄 종이 잔량(availableCount)을 나타내는 정보와 
print(int pages) 멤버 함수를 가지며, print()가 호출할 때마다 pages 매의 용지를 사용한다.

2.step 잉크젯 프린터는 잉크 잔량(availableInk) 정보와 printInkJet(int pages) 
멤버 함수를 추가적으로 가지며, 레이저 프린터는 토너 잔량(availableToner) 
정보와 역시 printLaser(int pages) 멤버 함수를 추가적으로 가진다.

3.step 각 클래스에 적절한 접근 지정으로 멤버 변수와 함수, 생성자, 소멸자를 작성하고, 
다음과 같이 실행되도록 전체 프로그램을 완성하라.
잉크젯 프린터 객체와 레이저 프린터 객체를 각각 하나만 동적 생성하여 시작한다.
*/
#include <iostream>
using namespace std;


class printer {
private:
    char* model;
    char* manufacture;
    int restPage = 0;
public:
    printer() {

    }
    printer(char* mdl, char* mft, int num) {
        model = mdl;
        manufacture = mft;
        restPage = num;
        
        cout << ">>프린트 등록! " << mdl << endl;
        cout << "> 모델명: " << mdl << endl;
        cout << "> 제조사: " << mft << endl;
        cout << "> 남은  용지: " << num << endl;
    }
    ~printer(){
        
    }
    void checkPage (int pages) {
        restPage += pages;
    }
    void print(int pages) {
        restPage -= pages;
    }
    
    void availableCount() {
        cout << "현재 페이지: " << restPage << endl;
    }

};

class inkJetPrinter : public printer {
private:
    int restInk;
public:
    inkJetPrinter(){}
    inkJetPrinter(char *mdl, char* mft, int pages) : printer(mdl, mft, pages) {
        
    }
    ~inkJetPrinter(){

    }

    void availableInk(int ink) {
        restInk = ink;
        cout << "사용 가능한 잉크: " << restInk << endl;
    }
    void printInkJet(int pages) {
        print(pages);
        cout << "잉크젯 프린터 용지 잔여 : " << pages << endl;
    }


};

class laserPrinter : public printer {
private:
    int restToner;
public:
    laserPrinter(){}
    laserPrinter(char *mdl, char* mft, int pages) : printer(mdl, mft, pages) {

    }
    ~laserPrinter(){

    }
    
    void availableToner(int toner) {
        restToner = toner;
        cout << "사용 가능한 토너: " << restToner << endl;
    }
    void printLaser(int pages) {
        print(pages);
        cout << "레이저 프린터 용지 잔여 : " << pages << endl;
        
    }
};


int main () {
    printer ptr("prt100", "samsung", 100);
    ptr.availableCount();

    inkJetPrinter* jetPrt = new inkJetPrinter("newJets", "Sony", 80);
    laserPrinter* lsrPtr = new laserPrinter("newLasers", "LG", 90);

    // ink
    jetPrt -> printInkJet(50);
    jetPrt -> availableInk(50);

    // laser
    lsrPtr -> printLaser(50);
    lsrPtr -> availableToner(50);

    return 0;
}









