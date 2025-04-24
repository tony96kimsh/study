// #include <iostream>
// #include <set>

// using namespace std;

// int main()
// {
//     const char* str = "cmksatiwoe";

//     set<char> scon(&str[0], &set[10]);
    
//     set<char>::iterator it;
    
//      for(it = scon.begin(); it != scon.end(); it++) {
//         cout<< it << endl;
//     }
// }

#include <iostream>
#include <set>

using namespace std;

int main()
{
    const char* str = "cmksatiwoe";

    set<char> scon(&str[0], &str[10]); // str의 0번째부터 10번째까지

    set<char>::iterator it;

    for(it = scon.begin(); it != scon.end(); it++) {
        cout << *it << endl; // 반복자가 가리키는 값 출력
    }
}
