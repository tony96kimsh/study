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
        void PowerToggle(); // 처리문 없이 선언만
    }
    public class Television : Power
    {
        private bool count = false;
        public void PowerToggle()
        {
            count = !count;
            if(count) 
            {
                Console.WriteLine("ON");
            } 
            else 
            {
                Console.WriteLine("OFF");
            }
        }
    }
    internal class Program
    {
        
        static void Main (string[] args)
        {
            Television tv = new Television();
            tv.PowerToggle();
            tv.PowerToggle();
            tv.PowerToggle();
        }
    }
}