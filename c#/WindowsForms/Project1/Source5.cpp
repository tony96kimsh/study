/*����ڷκ��� �� ���� ������ �Է� �޾Ƽ� ���ʷ� ���ϱ�, ���ϱ� ������ ������� �����Ͽ� �� ����� ����غ���. ��� ����� ���´� ������ ����.
���
��)
  2 �� 3 �� 4 = 1��*/

#include <stdio.h>

void main() {
	int numFirst = 0;
	int numSecond = 0;
	int numThird = 0;

	printf("�� ���� ������ �Է�: ");
	scanf_s("%d%d%d", &numFirst, &numSecond, &numThird);

	int  calcNum = numFirst + numSecond * numThird;
	printf("%d + %d * %d = %d", numFirst, numSecond, numThird, calcNum);
}