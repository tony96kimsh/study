/*����ڷκ��� 3���� ������ �Է� �޾Ƽ�, 3���� ���� ���� ����� ����϶�.

��� ��)
�� ���� ������ �Է��ϼ��� : 2 3 4
�� ���� ���� 24�Դϴ�.*/
#include <stdio.h>

int main() {
	int numFirst = 0;
	int numSecond = 0;
	int numThird = 0;	

	printf("�� ���� ������ �Է��ϼ��� :");

	scanf_s("%d%d%d", &numFirst, &numSecond, &numThird);	
	printf("�� ���� ���� %d�Դϴ�", numFirst * numSecond * numThird);

	return 0;
}