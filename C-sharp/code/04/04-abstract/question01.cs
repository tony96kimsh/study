// /*
// 다음 조건을 만족하는 C# 프로그램을 작성하시오.

// 1. 스마트폰의 공통 기능을 추상화한 클래스를 정의한다.
// 2. 이 클래스는 이름이 Smartphone이며, 다음의 추상 메서드를 포함한다:
//     - void Camera()
//     - void Call()
//     - void Network()
// 3. Smartphone 클래스를 상속받는 Samsung 클래스를 정의한다.
// 4. Samsung 클래스는 세 개의 추상 메서드를 모두 구현한다.
// 5. 각 메서드는 다음과 같은 문장을 출력한다:
//     - Camera(): "삼성 카메라 기능"
//     - Call(): "전화 기능"
//     - Network(): "삼성 네트워크 기능"
// 6. Main 함수에서 Samsung 객체를 Smartphone 타입으로 생성하고, 모든 메서드를 호출하여 출력되도록 한다.
// */

// using System;
// using System.Runtime.CompilerServices;

// namespace question
// {
//     internal class Program
//     {
//         abstract class Smartphone // 추상클래스
//         {
//             public abstract void Camera();
//             public abstract void Call();
//             public abstract void Network();
//         }

//         class Samsung : Smartphone
//         {
//             public Samsung () 
//             {
//                 Console.WriteLine("= = = 삼성 기능 = = =");
//             }
//             public override void Camera() 
//             {
//                 Console.WriteLine("삼성 카메라");
//             }            
            
//             public override void Call () 
//             {
//                 Console.WriteLine("삼성 전화");
//             }

//             public override void Network() 
//             {
//                 Console.WriteLine("삼성 네트워크");
//             }
//         }

//         class Apple : Smartphone
//         {
//             public Apple () {
//                 Console.WriteLine("= = = 애플 기능 = = =");
//             }
//             public override void Camera() 
//             {
//                 Console.WriteLine("애플 카메라");
//             }
//             public override void Call () 
//             {
//                 Console.WriteLine("애플 전화");
//             }
//             public override void Network () 
//             {
//                 Console.WriteLine("애플 네트워크");
//             }

//         }
//         static void Main(string[] args)
//         {
//             Samsung galaxy = new Samsung();          
//             galaxy.Camera();
//             galaxy.Call();
//             galaxy.Network();

//             Apple iphone = new Apple();
//             iphone.Camera();
//             iphone.Call();
//             iphone.Network();

//         }
//     }
// }