/* 
# 문제 .3 (난이도: 최하) 델리게이트를 통한 사칙연산 처리

두 개의 정수를 받아 연산 결과를 출력하는 델리게이트를 선언하라.  
이 델리게이트를 사용하여 덧셈과 곱셈 메서드를 연결하고,
각각의 결과를 출력하는 코드를 작성하라.
*/

using System;

namespace MyApp
{
    public delegate void Dlg(int a, int b);
    
    public class Arithmetic
    {
        private int result;
        public void Plus(int a, int b)
        {
            result = a + b;
            Console.WriteLine(result.ToString());
        }

        public void Minus(int a, int b)
        {
            result = a - b;
            Console.WriteLine(result.ToString());
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Arithmetic arit = new Arithmetic();
            Dlg dlg1 = arit.Plus;
            Dlg dlg2 = arit.Minus;

            dlg1(5, 5);
            dlg2(5, 5);
        }
    }
}