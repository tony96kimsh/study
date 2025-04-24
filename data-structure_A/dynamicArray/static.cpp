#include<stdio.h>
#include<memory>

char ar[16] = "abcdef";


void Insert(int idx, char ch) {
    //abc def
     memmove(ar + idx + 1, ar + idx, strlen(ar) - idx + 1);
     ar[idx] = ch;
}

void Delete(int idx) {
    memmove(ar + idx, ar + idx + 1, strlen(ar) - idx);
}

int main() {
    printf("최초 : %s", ar);

    // abc"t"def 크기 7인 배열
    memmove(ar + 4, ar + 3, strlen(ar) -3 + 1);
    Insert(3, 't');
    printf("삽입후 : %s\n", ar);
    Delete(1);
    printf("삭제 후 : %s\n", ar);

    return 0;
}