/* 
은행 시스템에서 `AccountSecurity`라는 클래스는 보안상 민감한 기능을 포함한다.
이 클래스는 외부에서 절대로 상속되어서는 안 되며, 독립적으로만 사용되어야 한다.
이러한 요구사항을 만족하는 `AccountSecurity` 클래스를 정의하라.
 */
using System;

namespace MyApp
{
//[접근 제한자] [기타 수식어] 반환형 이름(...)
// public sealed class MyClass { }       // 클래스 선언
// public virtual void Speak() { }       // 가상 메서드
// public override void Speak() { }      // 오버라이드
// public sealed override void Speak() { } // 오버라이드 방지
// protected abstract void Draw();       // 추상 메서드

    public sealed class AccountSecurity 
    {
        public AccountSecurity () {Console.WriteLine("Create System to protect Bank");}
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            AccountSecurity accountSecurity = new AccountSecurity();
        }
    }
}