using System;
using Microsoft.VisualBasic;

namespace Lambda
{
    class Human
    {
        public Human() 
        {

        }
        public Human(string name, int age) 
        {
            Name = name;
            Age = age;
        }
        // property 기능
        public string Name {get; set;}
        public int Age {get; set;}
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Human human = new Human("이순신", 32);
            var human = new {Name = "이순신", Age = 32};
            Console.WriteLine(human.Name + ", " + human.Age);
        }
    }
}