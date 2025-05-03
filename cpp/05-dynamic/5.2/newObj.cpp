#include <iostream>
using namespace std;

class MousePoint
{
public:
    MousePoint();
    MousePoint(int nX, int xY);
    void SetXY(int X, int Y);
    int GetX() const;
    int GetY() const;
private:
    int x, y;
};

MousePoint::MousePoint()
{

}
MousePoint::MousePoint(int nX, int nY)
{
    x = nX;
    y = nY;
}
void MousePoint::SetXY(int nX, int nY)
{
    x = nX;
    y = nY;
}

int MousePoint::GetX() const
{
    return x;
}
int MousePoint::GetY() const
{
    return y;
}


int main () {
    MousePoint *pt;
    pt = new MousePoint(10, 20);
    cout << "X coordinate: " << pt->GetX() << ", " << "Y coordinate: " << pt->GetY() << endl;
    delete pt;

    return 0;
}