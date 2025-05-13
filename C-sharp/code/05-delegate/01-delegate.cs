// namespace MyApp
// {
//     internal class Program
//     {
//         delegate void CalcDel(int x, int y); // delegate 선언
//         static void Plus(int a, int b) {
//             Console.WriteLine(a + b);
//         }
//         static void Minus(int a, int b) {
//             Console.WriteLine(a - b);
//         }
//         static void Multiple(int a, int b) {
//             Console.WriteLine(a * b);
//         }
//         static void Divide(int a, int b) {
//             Console.WriteLine(a / b);
//         }


//         static void Main(string[] args) 
//         {
//             /* CalcDel del1 = new CalcDel(Plus); // delegate 사용
//             int result = del1(10, 20);
//             Console.WriteLine(result);

//             // new 생략 가능
//             // CalcDel del2 = new CalcDel(Minus);
//             CalcDel del2 = Minus;
//             result = del2(20, 10);
//             Console.WriteLine(result); */

//             CalcDel del1 = Plus;
//             CalcDel del2 = Minus;
//             CalcDel del3 = Multiple;
//             CalcDel del4 = Divide;

//             del1 = del1 + del2;
//             del1 = del1 + del3;            
//             del1 = del1 + del4;

//             del1(20, 10);
//         }
//     }
// }