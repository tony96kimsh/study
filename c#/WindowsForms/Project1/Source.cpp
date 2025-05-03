//	사용자로부터 1개의 정수를 입력 받아서 입력 받은 수에 5를 곱한 결과를 출력하라.
#include <stdio.h>

int main() {
	int num = 0;

	scanf_s("%d", &num);
	printf("%d\n", num * 5);

	return 0;
}