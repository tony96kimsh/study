//����ڷκ��� ���ĺ� ���� �ϳ��� �Է� �޴´�. �׸��� �̿� �ش��ϴ� ���ڸ� ����϶�. ���� ��� ��A���� �Է��ϸ� ��� ����� 65�� �Ǿ�� �Ѵ�. (����, ���� �Է� �� ������ %c�� ����ϸ� �ȴ�.)
//#include <stdio.h>
//
//int main() {
//	char getAlphabet = 0;
//	
//	printf("���ĺ� ���� �ϳ� �Է��ϼ���.");
//	scanf_s(" %c", &getAlphabet);
//	printf("%d", getAlphabet);
//
//	return 0;
//}

#include <stdio.h>

int main() {
    char getAlphabet = 0;

    printf("���ĺ� ���� �ϳ� �Է��ϼ���:");
    scanf_s("%c", &getAlphabet, 1);
    printf("%d", getAlphabet);

    return 0;
}