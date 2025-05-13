using System;
using System.Collections;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            DateTime A = new DateTime(2025, 5, 12);
            DateTime B = new DateTime(2025, 7, 18);
            TimeSpan C = B - A;

            Console.WriteLine(C);

            A = new DateTime(2025, 5, 12);
            C = new TimeSpan(67, 0, 0, 0);
            B = A + C;
            Console.WriteLine(B);           
        }
    }
}