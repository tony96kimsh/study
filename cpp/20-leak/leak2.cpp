#include <iostream>
#include <crtdbg.h>

using namespace std;

class CTest {
public:
	CTest() {

	}
	~CTest() {

	}
private:
	int temp;
};

int main()
{
	_CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);

	CTest* p = new CTest[2];

	delete p;

	return 0;
}
