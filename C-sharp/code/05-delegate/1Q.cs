/* 
# 문제 .1 (난이도: 최하) 델리게이트 선언과 호출 기본

정수를 받아 출력하는 메서드를 델리게이트로 선언하고,
 해당 델리게이트를 통해 메서드를 호출하라.  
델리게이트 타입 정의, 메서드 정의, 호출 예시를 포함한 전체 코드를 작성하라.
 */

using System;

namespace MyApp
{    
    internal class Program
    {
        public delegate void Dlg (int a);        
        public static void PrintInt(int a)
        {
            Console.WriteLine(a.ToString());
        }
        static void Main(string[] args)
        {
            Dlg dlg = PrintInt;
            dlg(5);
        }
    }
}