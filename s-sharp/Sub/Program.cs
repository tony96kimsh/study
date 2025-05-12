/* 
어떤 전자기기도 공통적으로 전원을 켜고 끄는 기능이 있어야 한다.  
이 공통 기능을 인터페이스로 정의하고, 이를 `Television` 클래스에 적용하라.  
인터페이스와 클래스를 모두 구현하라.
*/
using System;

namespace MyApp
{
    
    public interface Power
    {
        void PowerToggle(bool count); // 처리문 없이 선언만
    }
    public class Television : Power
    {
        public override void PowerToggle(bool count)
        {

        }
    }
    internal class Program
    {
        private bool count = false;
        static void Main (string[] args)
        {

        }
    }
}