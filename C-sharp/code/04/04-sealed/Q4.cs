/* 
`Logger` 클래스에는 `PrintLog()`라는 virtual 메서드가 있다.
`JsonLogger` 클래스는 이를 override하며 JSON 형태로 출력하도록 바꿨다.
이제 `PrintLog()` 메서드는 더 이상 다른 클래스에서 수정되면 안 된다.
이러한 요구사항을 만족하도록 `Logger`와 `JsonLogger` 클래스를 포함한 코드를 작성하라.
 */
using System;

namespace MyApp
{    
    public class Logger 
    {
        public virtual void PrintLog () 
        {
            Console.WriteLine("김성훈 출입");
        }
    }

    public class JsonLogger : Logger
    {
        public sealed override void PrintLog ()
        {
            // JSON 변환 후 출력
            Console.WriteLine(" {\"log\": \"김성훈 출입\"} ");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Logger log = new JsonLogger();
            log.PrintLog();
        }
    }
}