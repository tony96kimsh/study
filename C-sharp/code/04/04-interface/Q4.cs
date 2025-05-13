/* 
# [난이도: 하] 문제 4. 다중 인터페이스를 구현한 스마트폰 설계

- 스마트폰은 전화도 걸 수 있고, 사진도 찍을 수 있어야 한다.  
`ICallable`, `ICamera`라는 두 개의 인터페이스를 만들고,
`SmartPhone` 클래스에서 이를 모두 구현하도록 코드를 작성하라.  
각 기능에 맞는 메서드는 하나씩 정의하라.
 */
 
using System;

namespace MyApp
{
    public interface ICallable
    {
        public void Callable();
    }
    public interface ICamera 
    {
        public void Camera();
    }
    public class SmartPhone : ICallable, ICamera
    {
        public void Callable()
        {
            Console.WriteLine("전화기능");
        }
        public void Camera()
        {
            Console.WriteLine("카메라 기능");
        }
    }
    
    internal class Program
    {
        static void Main (string[] args)
        {
            SmartPhone smartPhone = new SmartPhone();
            smartPhone.Callable();
            smartPhone.Camera();
        }
    }
}