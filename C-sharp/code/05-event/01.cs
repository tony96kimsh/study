// 수업 - 이벤트01
using System;

namespace MyApp
{
    internal class Program
    {
        public delegate void ButtonEvent();
        public static event ButtonEvent evtClick;
        public static void onClick()
        {
            evtClick();
        }
        public static void MyHandler()
        {
            Console.WriteLine("버튼 클릭 처리기 수행 성공");
        }
        static void Main(string[] args)
        {
            evtClick += new ButtonEvent(MyHandler);
            onClick();
        }
    }
}