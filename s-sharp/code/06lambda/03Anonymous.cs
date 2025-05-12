using System;
using System.Globalization;
using Microsoft.VisualBasic;

namespace Lambda
{
    internal class Program
    {
        delegate int CalDel(int x, int y);
        static void Main(string[] args)
        {
            CalDel del1;
            del1 = delegate(int x, int y)
            {
                return x + y;                
            };
            
            System.Console.WriteLine(del1(10, 20));
        }
    }
}