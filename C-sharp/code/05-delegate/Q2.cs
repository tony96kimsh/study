/* 
# 문제 .2 (난이도: 최하) 문자열 처리용 델리게이트 만들기

문자열을 인자로 받아 대문자로 출력하는 메서드를 만들고, 
이를 델리게이트로 연결해 호출하라.  
델리게이트 선언과 사용 흐름을 포함한 전체 코드를 작성하라.
*/
using System;

namespace MyApp 
{
    public class Transform
    {
        public void Upper(string s)
        {
            Console.WriteLine(s.ToUpper());
        }
    }
    internal class Program
    {        
        static void Main(string[] args)
        {
            Transform transform = new Transform();
            transform.Upper("abc");
        }
    }
}