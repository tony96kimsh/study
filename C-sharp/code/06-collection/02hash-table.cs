using System;
using System.Collections;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Hashtable ht = new Hashtable();
            
            ht.Add("boy", "소년");
            ht.Add("girl", "소녀");
            // 대괄호 표기법
            ht["school"] = "학교";

            Console.WriteLine(ht["boy"]);
        }
    }
}