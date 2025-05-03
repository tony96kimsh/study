// 사용자로부터 두 개의 정수를 입력 받는다. 입력한 두 정수를 그대로 출력하는 프로그램을 작성하라.
#include <stdio.h>

int main() {
	int numFirst = 0;
	int numSecond = 0;

	scanf_s("%d%d", &numFirst, &numSecond);
	printf("%d %d", numFirst, numSecond);

	return 0;
}