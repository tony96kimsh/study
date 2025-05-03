/*
//(폼기반 or 콘솔 기반 선택)구구단을 2단부터 9단까지 출력하는 프로그램을 작성하세요.
for (int i = 2; i <= 9; i++) {
    for (int j = 1; j <= 9; j++) {
        Console.WriteLine("{0} * {1} = {2}", i, j, i * j)
    }
}
*/
//구구단을 출력하되, 짝수단(2단, 4단, 6단, 8단)만 출력하는 프로그램을 작성하세요. 단, continue문을 사용하여 작성할 것. Label에 출력.
/* 
for(int i = 2; i <= 9; i++) {
    if (i % 2 == 1)
        continue;
    for(int j = 0; j <= 9; j++) {
        Console.WriteLine("{0} * {1} = {2}", i, j, i * j);
    }
}
 */

/*  1부터 10까지 숫자를 출력하는데, 이 중 3의 배수만 “박수”라고 출력하고, 나머지는 모두 원래의 숫자를 출력하는 프로그램을 만들어보세요. Label에 출력
	
예)  1 2 박수 4 5 박수 7 8 박수 10
참고 : %는 나머지를 구하는 연산이다.  */
/* 
for(int i = 1; i <= 10; i++) 
{
    if (i % 3 == 0)
    {
        Console.Write("박수, ");
    } else
    {
        Console.Write(i.ToString() + ", ");
    }
} */

/*
Random 객체를 사용하여 6자리의 수를 뽑아내는 로또 번호 추출기를 작성하라. 
1. 6자리의 번호를 무작위로 추출한다. (범위는 1-45)
2. 6자리 중에 중복 검사를 하여 중복 숫자는 제외하고 다시 추출한다.
*/
using System;

class Program
{
    static void Main() {
        Random r = new Random();
        // 랜덤 범위 1이상 46미만

        int[] lottoNums = new int[6];
        int rNum;

        for (int i = 0; i < 6; i++) {
            rNum = r.Next(1, 46);
            foreach (int n in lottoNums) 
            {
                while (n == rNum) 
                {
                    rNum = r.Next(1, 46);
                }
            }
            lottoNums[i] = rNum;     
        }

        for (int i = 0; i < 6; i++) {
            Console.Write(lottoNums[i] + " ");
        }
    }
}