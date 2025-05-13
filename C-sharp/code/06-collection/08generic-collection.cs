using System;
using System.Collections;
using System.Net.Http.Headers;

namespace MyApp
{
    internal class Program
    {
        static void Main ()
        {
            // = = = 일반컬렉션 = = =
            // ArrayList ar = new ArrayList();

            // ar.Add(1);
            // ar.Add(2.34);
            // ar.Add("string");

            // // 명시적인 타입 캐스팅 필요
            // Console.WriteLine((int)ar[0]);
            // Console.WriteLine((double)ar[1]);
            // Console.WriteLine((string)ar[2]);

            // 제네릭 컬렉션
            List<string> ar = new List<string>();

            ar.Add("C#");
            ar.Add("ASP.NET");
            ar.Add("Javascript");
            // ar.Add(100); // error!

            foreach(string item in ar)
            {
                Console.Write(item + ", ");
            }
        }

        
    }
}
