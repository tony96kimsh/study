/* 
추상 클래스와 다형성 개념을 확인하는 다음 조건의 프로그램을 작성하시오.

1. abstract class Animal을 정의한다.
2. Animal 클래스는 추상 메서드 void Speak()를 포함한다.
3. Dog 클래스와 Cat 클래스를 각각 정의하고 Animal을 상속받는다.
4. Dog 클래스의 Speak 메서드는 "멍멍"을 출력하고, Cat 클래스는 "야옹"을 출력한다.
5. Main 함수에서 Animal 타입 배열에 Dog, Cat 객체를 각각 저장하고 반복문으로 Speak 메서드를 호출하여 출력되도록 한다.
 */

using System;
using System.ComponentModel;
using System.Security.Cryptography.X509Certificates;

namespace MyApp 
{
    public abstract class Animal 
    {
        public abstract void Speak();        
    }
    public class Dog : Animal 
    {
        public override void Speak()
        {
            Console.WriteLine("멍멍");
        }
    }

    public class Cat : Animal
    {
        public override void Speak()
        {
            Console.WriteLine("야옹");
        }
    }
    internal class Process 
    {
        static void Main(string[] args)
        {
            //5. Main 함수에서 Animal 타입 배열에 Dog, Cat 객체를 각각 저장하고 반복문으로 Speak 메서드를 호출하여 출력되도록 한다.
            // 클래스 배열 선언
            // Animal[] animals = new Animal[2];
            // animals[0] = new Dog();
            // animals[1] = new Cat();

            //더 간결하게
            Animal[] animals = { new Dog(), new Cat() };
            foreach (Animal animal in animals)
            {
                animal.Speak();
            }

        }
    }    
}