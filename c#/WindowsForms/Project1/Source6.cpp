//����ڷκ��� 3 ���� ������ �Է� �޴´�. �Է��� �� ������ �հ� ����� ����ϴ� ���α׷��� �ۼ��϶�.
#include <stdio.h>

void main() {
	int numFirst = 0;
	int numSecond = 0;
	int numThird = 0;
	
	printf("3 ���� ������ �Է�: ");
	scanf_s("%d%d%d", &numFirst, &numSecond, &numThird);
	
	int calcSumNum = numFirst + numSecond + numThird;
	float calcAverageNum = calcSumNum / 3.0f;
	printf("��: %d, ���: %.2f", calcSumNum, calcAverageNum);
}