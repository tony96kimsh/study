using System;
using System.Collections;
using System.Net.Http.Headers;

namespace MyApp
{
    internal class Program
    {
        static int[] ar = {1, 2, 3, 4, 5};
        static int idx = 8;

        static public void Method1()
        {
            Method2();
        }

        static public void Method2()
        {
            Console.WriteLine(ar[idx]);
        }

        static void Main ()
        {
            try
            {
               Method1();
            }
            catch(IndexOutOfRangeException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine();
                Console.WriteLine(e.Source);
                Console.WriteLine();
                Console.WriteLine(e.TargetSite);
                Console.WriteLine();
                Console.WriteLine(e.StackTrace);
/*
Index was outside the bounds of the array.
e.Source : System.Private.CoreLib
e.TargetSite : Void ThrowIndexOutOfRangeException()
e.StackTrace :    at MyApp.Program.Method2() in C:\tony\study\s-sharp\debug\Program copy.cs:line 19
at MyApp.Program.Method1() in C:\tony\study\s-sharp\debug\Program copy.cs:line 14     
at MyApp.Program.Main() in C:\tony\study\s-sharp\debug\Program copy.cs:line 26    
*/

            }
        }
    }
}
