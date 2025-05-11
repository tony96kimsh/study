/* 
게임에서 `FinalBoss` 클래스는 고정된 능력치를 가지며, 상속을 통해 수정되면 게임 밸런스에 문제가 생긴다.
이러한 클래스를 봉인하여 더 이상 상속할 수 없도록 코드를 완성하라.
*/

using System;

namespace MyApp
{
    internal class Program
    {
        public sealed class FinalBoss
        {
            public FinalBoss ()
            {
                Console.WriteLine("최종보스 등장");
            }
        }
        // Error! cannot derive from sealed type
        public class superVilein : FinalBoss
        {
            public superVilein ()
            {
                Console.WriteLine("최최종 뇌절 보스 등장");
            }
        }
        
        static void Main (string[] args) 
        {
            FinalBoss finalBoss = new FinalBoss();            

        }
    }
}