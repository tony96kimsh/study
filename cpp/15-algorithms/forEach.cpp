#include<iostream>
#include<vector>
#include<algorithm>
#include<string>
using namespace std;

void func(string str) {
    cout << str << endl;
}


int main()
{
    vector <string> vs;
    // string 타입을 담을 수 있는 벡터 객체

    vs.push_back("인성 교육의 중요성");
    vs.push_back("날이 좋아서 날이 적당해서");
    vs.push_back("낮잠을 잤습니다.");
    vs.push_back("얼마나 좋아. 집도 사고, 땅도 사고");


    for_each(vs.begin(), vs.end(), func); 
    // 콜백함수 func는 호출이 아닌 "등록" 개념 => 순회할 때 마다 호출되는 것

    return 0;
}
