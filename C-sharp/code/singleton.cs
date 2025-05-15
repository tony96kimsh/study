// 싱글톤
using System;

namespace MyApp
{
    
    public class Singleton
    {
        private static Singleton instance;
        public static Singleton getInstance()
        {
            if (instance == null)
            {
                instance = new Singleton();
            }
            return instance;
        }

        public void ShowMessage()
        {
            Console.WriteLine("싱글톤 패턴");
        }

    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // 클래스로 바로 접근 가능한 static 함수를 통해 
            Singleton.getInstance().ShowMessage();

        }
    }
}