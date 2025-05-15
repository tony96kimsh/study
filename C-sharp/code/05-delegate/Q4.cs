/* 
# 문제 .4 (난이도: 하) 델리게이트 배열을 통한 일괄 처리

여러 개의 정수 출력 메서드를 델리게이트 배열에 저장하고, 
반복문을 통해 일괄 호출하라.  
델리게이트 선언, 메서드 정의, 배열 생성 및 반복 호출 흐름을 
포함한 코드를 완성하라.
*/
using System;
using System.Runtime.CompilerServices;

namespace MyApp
{
    public delegate void Dlg(int a, int b);
    public class Arithmetic
    {
        public int result;
        public void Plus (int a, int b) 
        {
            result  = a + b;
            Console.WriteLine(result.ToString());
        }
        public void Minus (int a, int b) 
        {
            result  = a - b;
            Console.WriteLine(result.ToString());
        }
        public void Divide (int a, int b) 
        {
            result  = a / b;
            Console.WriteLine(result.ToString());
        }
        public void Multiply (int a, int b) 
        {
            result  = a * b;
            Console.WriteLine(result.ToString());
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Arithmetic arit = new Arithmetic();
            // array delegate
            Dlg[] dlgs = new Dlg[4];
            dlgs[0] = arit.Plus;
            dlgs[1] = arit.Minus;
            dlgs[2] = arit.Divide;
            dlgs[3] = arit.Multiply;
            
            int a = 10;
            int b = 5;

            foreach (var op in dlgs)
            {
                op(a, b);
            }
            dlgs[0](a, b);
        }
    }
}