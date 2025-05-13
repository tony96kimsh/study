/* 
# 문제 5. 인터페이스를 통한 다형성 구현
인터페이스 `INotifier`는 `Notify()` 메서드를 제공한다.  
`EmailNotifier`와 `SMSNotifier` 클래스는 각각 이메일과 문자로 알림을 제공한다.
이 인터페이스와 두 클래스를 정의하고, 하나의 인터페이스 타입으로 
두 인스턴스를 호출하는 예제를 포함해 코드를 작성하라.
*/
using System;

namespace MyApp
{
    public interface INotifier
    {
        public void Notify ();
    }

    public class EmailNotifier : INotifier
    {
        public void Notify ()
        {
            Console.WriteLine("이메일 알림");
        }
    }

    public class SMSNotifier : INotifier
    {

        public void Notify ()
        {
            Console.WriteLine("문자 알림");
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            //하나의 인터페이스 타입으로 두 인스턴스를 호출하는 예제를 포함해 코드를 작성하라.
            INotifier emailNotifier = new EmailNotifier();
            INotifier smsNotifier = new SMSNotifier();

            emailNotifier.Notify();
            smsNotifier.Notify();
        }
    }
}