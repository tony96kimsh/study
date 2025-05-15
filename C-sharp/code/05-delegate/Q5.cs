/* 
# 문제 .5 (난이도: 하) 델리게이트를 이용한 조건 분기

정수를 입력받아 짝수면 "Even", 홀수면 "Odd"를 출력하는 메서드를 델리게이트로 연결하라.  
입력된 숫자에 따라 알맞은 델리게이트가 실행되도록 조건 분기 코드를 포함해 작성하라.
*/

using System;
 
namespace MyApp
{
    public delegate void Dlg(int a);
    internal class Program
    {
        static void IsOdd(int a)
        {
            if(a % 2 == 1) {
                Console.WriteLine("Odd");
            } else {
                Console.WriteLine("Even");
            }
        }
        static void Main()
        {
            Dlg dlg = IsOdd;
            Console.Write("값을 입력하세요 : ");
            int insert = Console.Read();
            dlg(insert);
        }
    }
}