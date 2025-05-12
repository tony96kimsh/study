/* 
# 인증 메서드 봉인을 포함한 은행 서비스 계층 설계

`BankService` 클래스는 `Authenticate()` 메서드를 virtual로 제공한다.
`SecureBankService`는 이 메서드를 override하여 생체 인증 기능을 추가하고,
다른 클래스에서는 이 인증 방식이 더 이상 수정되지 않도록 해야 한다.
이 요구사항을 만족하는 세 클래스 (`BankService`, `SecureBankService`, `OtherService`)를 포함하여 코드를 작성하라.
단, `OtherService`는 컴파일 오류가 발생하도록 작성하고 주석 처리하라.
*/

using System;
using System.Net.Security;

namespace MyApp
{
    public class BankService
    {
        public virtual void Authenticate () 
        {
            Console.WriteLine("반갑습니다.");
        }
    }

    public class SecureBankService : BankService
    {
        public sealed override void Authenticate () 
        {
            Console.WriteLine("지문인식 후 사용가능합니다.");
        }
    }

    /* public class OtherService : SecureBankService
    {
        //Error! cannot override inherited member 'SecureBankService.Authenticate()' because it is sealed  
        public override void Authenticate ()
        {
            Console.WriteLine("비밀번호 입력 후 사용가능합니다.");
        }
    } */

    internal class Program
    {
        static void Main (string[] args)
        {
            SecureBankService secureBankService = new SecureBankService();
            secureBankService.Authenticate();
        }
    }
}