/* 
`SafeLogger` 클래스는 로그를 기록하는 중요한 기능을 포함하고 있어,
다른 클래스에서 이를 상속받아 확장하는 것이 금지되어야 한다.
이 클래스를 봉인하여 외부 확장을 방지하는 코드를 작성하라.
 */

using System;

namespace MyApp
{
    public sealed class SafeLogger
    {
        public SafeLogger()
        {
            Console.WriteLine("Construct Log");
        }
    }
    internal class Program
    {
        static void Main (string[] args) 
        {
            SafeLogger safeLogger = new SafeLogger();
            
        }
    }
}