/*
����ڷκ��� �� ���� ������ �Է� �޾� ��Ģ ������ ����� ����غ���. ����� �Է��� ���� 4�� 2�� �Է��Ͽ��� ��, ��� ����� ���´� ������ ����.
���
��)
  �� ���� �� : 6
  �� ���� �� : 2
  �� ���� �� : 8
  �� ���� ������ : 2
*/
#include <stdio.h>

int main() {
	int numFirst = 0;
	int numSecond = 0;

	printf("�� ���� ������ �Է����ּ��� : ");

	scanf_s("%d%d", &numFirst, &numSecond);

	printf("�� ���� ��: %d\n", numFirst + numSecond);
	printf("�� ���� ��: %d\n", numFirst - numSecond);
	printf("�� ���� ��: %d\n", numFirst * numSecond);
	printf("�� ���� ������: %d\n", numFirst / numSecond);

	return 0;
}