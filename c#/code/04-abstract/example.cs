// using System;

// namespace MyApp
// {
//     abstract class smartphone
//     {
//         public abstract void Camera();
//         public abstract void CellPhone();
//         public abstract void Network();        
//     }

//     class Samsung : smartphone
//     { 
//         public override void Camera()
//         {
//             Console.WriteLine("삼성 카메라 기능");
//         }
//         public override void CellPhone()
//         {
//             Console.WriteLine("전화 기능");
//         }
//         public override void Network()
//         {
//             Console.WriteLine("삼성 네트워크 기능");
//         }
//     }

//     class Apple : smartphone
//     { 
//         public override void Camera()
//         {
//             Console.WriteLine("애플 카메라 기능");  // ← 삼성 → 애플로 바꾸면 더 정확
//         }
//         public override void CellPhone()
//         {
//             Console.WriteLine("전화 기능");
//         }
//         public override void Network()
//         {
//             Console.WriteLine("애플 네트워크 기능");  // ← 삼성 → 애플로 바꾸면 더 정확
//         }
//     }

//     class Base
//     {
//         public virtual void Message() 
//         {
//             Console.WriteLine("Base");
//         }
//     }
//     class Derived : Base 
//     {
//         public sealed override void Message() { Console.WriteLine("Derived"); }        
//     }

//     class Third : Derived 
//     {
//         public new void Message() { Console.WriteLine("Derived"); }
//     }

//     internal class Program
//     {
//         static void Main(string[] args)
//         {
//             smartphone phone = new Samsung();
//             phone.Camera();
//             phone.CellPhone();
//             phone.Network();

//             phone = new Apple();
//             phone.Camera();
//             phone.CellPhone();
//             phone.Network();
//         }
//     }
// }
