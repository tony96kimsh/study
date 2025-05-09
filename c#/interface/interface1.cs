/* using System;

namespace MyApp
{
    // 공격, 이동
    public interface IUnit // 인터페이스는 통상적으로 접두어 I 붙혀준다.
    {
        void Attack();
        void Move();
    }


    public class Zergling : IUnit  // 인터페이스 추상 메소드
    {
        public void Attack() 
        {
            Console.WriteLine("저글링 : 공격한다.");
        }
        public void Move() 
        {
            Console.WriteLine("저글링 : 움직인다.");
        }
    }

    public class Zealot : IUnit  // 인터페이스 추상 메소드
    {
        public void Attack() 
        {
            Console.WriteLine("질럿 : 공격한다.");
        }
        public void Move() 
        {
            Console.WriteLine("질럿 : 움직인다");
        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            Zergling zergling = new Zergling();
            zergling.Attack();
            zergling.Move();

            Zealot zealot = new Zealot();
            zealot.Attack();
            zealot.Move();


        }
    }
} */