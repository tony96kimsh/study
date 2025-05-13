/* 
모든 동물은 `MakeSound()`라는 메서드를 통해 소리를 낼 수 있어야 한다.  
`IDog`, `ICat` 같은 클래스가 이 기능을 구현한다고 가정하고, 
이를 위한 인터페이스와 클래스 코드를 작성하라.
 */
using System;

namespace MyApp
{
    public interface Animal
    {
        public void MakeSound();
    }
    public class IDog : Animal
    {
        public void MakeSound()
        {
            Console.WriteLine("멍멍");
        }
    }
    public class ICat : Animal
    {
        public void MakeSound()
        {
            Console.WriteLine("야옹");
        }
    }
    
    internal class Program
    {
        static void Main (string[] args)
        {
            IDog iDog = new IDog();
            ICat iCat = new ICat();
            iDog.MakeSound();
            iCat.MakeSound();
        }        
    }
}