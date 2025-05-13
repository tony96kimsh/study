/* 
# [난이도: 중] 문제 6. 인터페이스를 활용한 결제 시스템 설계

- `IPayment`이라는 인터페이스는 `Pay(int amount)` 메서드를 포함한다.  
`CardPayment`, `CashPayment` 클래스는 각각 카드와 현금을 통해 결제를 처리한다.  
이 인터페이스와 두 클래스를 구현하고, `Main` 함수에서 각각의 결제 방식으로 
1000원을 지불하는 코드를 작성하라.
 */
using System;

namespace MyApp
{
    public interface IPayment
    {
        public void Pay(int amount);
    }

    public class CardPayment : IPayment
    {
        private int money;
        public CardPayment()
        {
            money = 0;            
        }
        public CardPayment(int money)
        {
            this.money = money;            
        }

        public void Pay (int amount)
        {
          money = money - amount;
          Console.WriteLine(money.ToString());          
        }
    }

    public class CashPayment : IPayment
    {
        private int money;

        public CashPayment()
        {
            money = 0;            
        }
        public CashPayment (int money)
        {
            this.money = money;
        }

        public void Pay(int amount)
        {
          money = money - amount;
          Console.WriteLine(money.ToString());
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            CardPayment cdp = new CardPayment(10000);
            CashPayment csp = new CashPayment(10000);

            cdp.Pay(1000);
            csp.Pay(1000);

        }
    }
}