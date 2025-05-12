using System;
using System.Collections;
using System.Net.Http.Headers;

namespace MyApp
{
    // public class WrapperInt 
    // {
    //     int ivalue;
    //     public WrapperInt () { ivalue = 0; }
    //     public WrapperInt (int avalue)
    //     {
    //         this.ivalue = avalue;
    //     }

    //     public int Data
    //     {
    //         get { return ivalue; }
    //         set { ivalue = value; }
    //     }

    //     public void OutValue()
    //     {
    //         Console.WriteLine(ivalue);
    //     }
    // }

    // public class WrapperString
    // {
    //     string strvalue;
    //     public WrapperString () { strvalue = null; }
    //     public WrapperString (string avalue)
    //     {
    //         this.strvalue = avalue;
    //     }

    //     public string Data
    //     {
    //         get { return strvalue; }
    //         set { strvalue = value; }
    //     }

    //     public void OutValue()
    //     {
    //         Console.WriteLine(strvalue);
    //     }
    // }

    public class Wrapper<T>
    {
        T ivalue;

        public Wrapper()
        {
            ivalue = default(T);
        }

        public Wrapper(T avalue)
        {
            this.ivalue = avalue;
        }

        public T Data
        {
            get { return ivalue; }
            set { ivalue = value; }
        }

        public void OutValue()
        {
            Console.WriteLine(ivalue);
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Wrapper<int> gi = new Wrapper<int>(1234);
            gi.OutValue();
        
            Wrapper<string> gs = new Wrapper<string>("문자열");
            gs.OutValue();
        }
    }
}
