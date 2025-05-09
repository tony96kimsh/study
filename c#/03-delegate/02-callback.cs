// namespace MyApp
// {
//     internal class Program
//     {
//         delegate void CalcDel(int x, int y); // delegate 선언

        
//         static void Event(int x, int y, CalcDel dele) 
//         {
//             dele(x, y);
//         }

//         static void Plus(int a, int b) 
//         {
//             Console.WriteLine(a + b);
//         }
//         static void Minus(int a, int b) 
//         {
//             Console.WriteLine(a - b);
//         }
//         static void Multiple(int a, int b) 
//         {
//             Console.WriteLine(a * b);
//         }
//         static void Divide(int a, int b) 
//         {
//             Console.WriteLine(a / b);
//         }


//         static void Main(string[] args) 
//         {
//             CalcDel del1 = Plus;
//             CalcDel del2 = Minus;
//             CalcDel del3 = Multiple;
//             CalcDel del4 = Divide;
//             /*
//             가상의 이벤트가 있다(콘솔 이벤트가 없으니..)
//             이벤트가 발생하면 델리게이트를 실행하고 싶으면, 델리게이트로 받는다.
//             */
//             Event(20, 10, del1);
//             Event(20, 10, del2);
//             Event(20, 10, del3);
//             Event(20, 10, del4);
//             /*
//             다시 말해, 델리게이트는…
//             - 콜백 함수의 전달 도구
//             - 이벤트 구조의 기반
//             - 런타임에서 어떤 메소드를 호출할지 유연하게 선택하는 수단
//             */

//         }
//     }
// } 