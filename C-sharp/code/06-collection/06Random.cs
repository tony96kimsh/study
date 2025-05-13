using System;
using System.Collections;
using System.Net.Http.Headers;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            // Next(int minValue, int maxValue) 최솟값 이상 최대값 미만
            // Next(int maxValue) 0 부터 최대값
            // Console.WriteLine(rnd.Next(1, 46));

            for (int i = 0; i < 100; i++)
            {
                Console.CursorLeft = rnd.Next(80);
                Console.CursorTop = rnd.Next(8);
                Console.Write('*');
            }
                  
        }
    }
}