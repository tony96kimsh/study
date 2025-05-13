/* 
모든 교통수단은 `Move()`라는 메서드를 가지고 있다.  
`Car`, `Bicycle` 클래스가 이 인터페이스를 구현한다고 할 때, 
필요한 인터페이스와 클래스 정의를 작성하라.
*/

using System;

namespace MyApp
{
    public interface Movement
    {
        void Move();
    }

    public class Car : Movement
    {
        public void Move()
        {
            Console.WriteLine("부르릉");
        }
    }

    public class Bicycle : Movement
    {
        public void Move()
        {
            Console.WriteLine("따릉때르릉");
        }
    }

    internal class Program
    {
        static void Main()
        {
            Car car = new Car();
            Bicycle bicycle = new Bicycle();

            car.Move();
            bicycle.Move();
        }
    }    
}