using System;
using System.Collections;

namespace MyApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Stack stack = new Stack();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);
            stack.Push(5);

            Console.WriteLine(stack.Pop()); // 5
            Console.WriteLine(stack.Pop()); // 4
            Console.WriteLine(stack.Pop()); // 3
        }
    }
}