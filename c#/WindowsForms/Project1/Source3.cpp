/*
사용자로부터 두 개의 정수를 입력 받아 사칙 연산의 결과를 출력해보자. 사용자 입력을 각각 4와 2를 입력하였을 때, 출력 결과의 형태는 다음과 같다.
출력
예)
  두 수의 합 : 6
  두 수의 차 : 2
  두 수의 곱 : 8
  두 수의 나누기 : 2
*/
#include <stdio.h>

int main() {
	int numFirst = 0;
	int numSecond = 0;

	printf("두 개의 정수를 입력해주세요 : ");

	scanf_s("%d%d", &numFirst, &numSecond);

	printf("두 수의 합: %d\n", numFirst + numSecond);
	printf("두 수의 차: %d\n", numFirst - numSecond);
	printf("두 수의 곱: %d\n", numFirst * numSecond);
	printf("두 수의 나누기: %d\n", numFirst / numSecond);

	return 0;
}