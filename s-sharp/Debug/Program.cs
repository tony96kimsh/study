using System;

namespace Lambda
{
    delegate int CalDel(int x, int y);
    // static int Plus(int a, int b)
    // {
    //     return a + b;
    // }
    internal class Program
    {
        static void Main(string[] args)
        {
            // int sum = Plus(10, 20);
            // Console.WriteLine(sum);

            CalDel d = (int x, int y) => x + y;
            int sum = d(10, 20);
            Console.WriteLine(sum);
        }
    }
}