using System;

namespace MyApp
{
    delegate bool CompProg(int nFile);
    internal class Program
    {
        class Archive 
        {
            public static bool Compress (int nFile, CompProg prog) 
            {
                for(int i = 0; i < nFile; i++)
                {
                    if(prog(i) == false) {
                        return false;
                    };
                    System.Threading.Thread.Sleep(500);
                }
                return true; 
            } 
        }
        public static bool Progress(int nFile) 
        {
            Console.WriteLine($"{nFile + 1} 번 째 압축중입니다.");
            if(Console.KeyAvailable)
            {
                ConsoleKeyInfo cki;
                cki = Console.ReadKey(false);
                // Q입력 시 압축 종료
                if (cki.Key == ConsoleKey.Q) {
                    return false;
                }
            }
            return true;
        }        
        static void Main(string[] args)
        {
            // static 함수 = 클래스 함수 
            // 호출 방법 직접접근(.)
            if (Archive.Compress(10, Progress) == true) {
                Console.WriteLine("모든 파일을 압축했습니다.");
            } else 
            {
                Console.WriteLine("\n압축이 취소되었습니다.");                
            }
        }
    }
}