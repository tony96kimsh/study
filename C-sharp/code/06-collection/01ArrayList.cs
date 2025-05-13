using System;
using System.Collections;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ArrayList ar = new ArrayList(10);
            // ar.Add(1);
            // ar.Add(2);
            // ar.Add(2.34);
            // ar.Add("string");
            // ar.Add(new DateTime(2025, 05, 12));
            // ar.Insert(1, 1234);

            // foreach(object i in ar)
            // {
            //     Console.WriteLine(i.ToString());
            // }
            // Console.WriteLine(ar.Count);
            // Console.WriteLine(ar.Capacity);

            ar.Add("이승만");
            ar.Add("박정희");
            ar.Add("최규하");
            ar.Add("전두환");
            ar.Add("노태우");
            ar.Add("김영삼");
            ar.Add("김대중");
            ar.Add("노무현");
            ar.Add("이명박");
            ar.Add("박근혜");
            ar.Add("문재인");

            foreach(object i in ar)
            {
                Console.Write(i + ", ");
            }
            Console.WriteLine();
            
            ar.Sort();           

            foreach(object i in ar)
            {
                Console.Write(i + ", ");
            }
            Console.WriteLine();

            ar.Reverse();

            foreach(object i in ar)
            {
                Console.Write(i + ", ");
            }
            Console.WriteLine();
        }
    }
}
