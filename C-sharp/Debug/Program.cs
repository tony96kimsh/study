using System;

namespace MyApp
{
    // 1. 델리게이트 선언
    public delegate void Notify();

    // 2. 이벤트 발생클래스
    public class Process
    {
        public event Notify OnCompleted;

        public void Run()
        {
            Console.WriteLine("작업 수행 중...");
            // 작업 끝났다고 가정
            OnCompleted?.Invoke();
            // 이벤트 호출(null 체크 필수)
        }
    }
    internal class Program
    {
        
        static void Main(string[] args)
        {
            Process p = new Process();

            // 이벤트 구독
        }
        
        static void Finished()
        {

        }
    }
}