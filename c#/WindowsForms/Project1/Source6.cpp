//사용자로부터 3 개의 정수를 입력 받는다. 입력한 세 정수의 합과 평균을 출력하는 프로그램을 작성하라.
#include <stdio.h>

void main() {
	int numFirst = 0;
	int numSecond = 0;
	int numThird = 0;
	
	printf("3 개의 정수를 입력: ");
	scanf_s("%d%d%d", &numFirst, &numSecond, &numThird);
	
	int calcSumNum = numFirst + numSecond + numThird;
	float calcAverageNum = calcSumNum / 3.0f;
	printf("합: %d, 평균: %.2f", calcSumNum, calcAverageNum);
}