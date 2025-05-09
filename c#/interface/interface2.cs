using System;

namespace MyApp
{
    public interface ICamera
    {
        void Camera();
    }

    public interface ICallPhone
    {
        void CallPhone();
    }

    public interface INetwork
    {
        void Network();
    }

    public class SmartPhone : ICamera, ICallPhone, INetwork
    {
        public virtual void Camera()
        {
            Console.WriteLine("카메라 기능 구현");
        }
        public virtual void CallPhone()
        {
            Console.WriteLine("전화 기능 구현");
        }
        public virtual void Network()
        {
            Console.WriteLine("통신 기능 구현");
        }
    }

    public class Samsung : SmartPhone { }

    public class Apple : SmartPhone { }

    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Samsung samsung = new Samsung();
            Apple apple = new Apple();

            Console.WriteLine("\n[Samsung 기능 실행]");
            samsung.Camera();
            samsung.CallPhone();
            samsung.Network();

            Console.WriteLine("\n[Apple 기능 실행]");
            apple.Camera();
            apple.CallPhone();
            apple.Network();
        }
    }

}
