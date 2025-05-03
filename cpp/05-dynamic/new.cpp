#include <iostream>
using namespace std;

class MousePoint
{
private:
    int x;
    int y;   
    static int z;

public:
    MousePoint(){
        x = 0;
        y = 0;
        cout << "default constructor" << endl;
    }
    MousePoint(int a, int b){
        x = a;
        y = b;
    }
    void getX()
    {
        return x;
    } 
    void getY()
    {
        return x;
    } 
};

int main ()
{
    // int len = 0;
    // int* pbuf;
    
    // cout << "할당할 메모리 수 : ";
    // cin >> len;

    // //pbuff = (int*)malloc(100)
    // pbuf = new int[3];

    // for(int i = 0; i < len; i++)
    // {
    //     pbuf[i] = i + 1;
    // }

    // for(int i = 0; i < len; i++)
    // {
    //     cout << pbuf[i] << endl;
    // }

    // delete[] pbuf; // notation: delete array need '[]' 

    // return 0;

    //static allocation
    MousePoint pt1(10, 20);

    //dynamic allocation
    // MousePoint *pt2 = new MousePoint(10, 20); //new operate return only address

    // cout << pt2 -> getX() << endl; //arrow is indirect referencing
    // cout << pt2 -> getY() << endl; 
    // delete pt2;

    // 객체 포인터 배열
    MousePoint* pArr[3];
    pArr[0] = new MousePoint(10, 20);
    pArr[0] = new MousePoint(100, 200);
    pArr[0] = new MousePoint(1000, 2000);

    for(int i = 0; i < 3; i++) {
        cout << pArr[i] -> getX() << endl;
        cout << pArr[i] -> getY() << endl;
    }
    for(int i = 0; i < 3; i++){
        // delete[] pArr;
        delete pArr[i];
    }
}