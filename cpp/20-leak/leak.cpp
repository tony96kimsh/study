#include <iostream>
#include <crtdbg.h>

using namespace std;

int main()
{
     _CrtSetBreakAlloc(79);  // 필요할 경우 특정 블록 감시
    _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);

    int* p = new int;
    // delete p;  // 주석 해제하면 메모리 누수 안 남
s
    _CrtDumpMemoryLeaks();


    return 0;
}
