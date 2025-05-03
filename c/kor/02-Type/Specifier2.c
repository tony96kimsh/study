/*
우리가 배운 서식 문자열을 이용하여 다음과 같은 출력 결과를 보일 수 있도록 프로그램을 작성해보록 하자
이름: 김성훈
나이: 30세
성적: D

서식 문자 %d, 서식 문자 %c를 각각 사용하여 결과값을 출력하도록 하자
*/
#include <stdio.h>

int main () {
    char name[] = "abc성훈";
    int age = 30;

    printf("이름: %s\n", name);
    printf("나이: %d\n", age);
    printf("나이: %d\n", age);
    return 0;
}