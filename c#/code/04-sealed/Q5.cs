/* 
기본 클래스 `BaseDevice`는 `Start()`라는 virtual 메서드를 가진다.
이를 상속한 `AdvancedDevice`는 `Start()`를 override하고 로그 기능을 추가한다.
이제 이 `Start()` 메서드는 다른 파생 클래스에서 다시 override할 수 없도록 봉인되어야 한다.
`BaseDevice`, `AdvancedDevice` 클래스를 포함하여 코드를 완성하라.
 */
using System;

namespace MyApp
{
    public class BaseDevice
    {
        public virtual void Start ()
        {
            Console.WriteLine("시작");
        } 
    }

    public class AdvancedDevice : BaseDevice
    {
        // override는 하되, 더 이상 자식에서 override 못하게 봉인
        public sealed override void Start()
        {
            Console.WriteLine("Check Log");
        }
    }

    // ❌ 오류 발생: AdvancedDevice에서 sealed 했기 때문에 override 불가
    // public class budgetDevice : AdvancedDevice
    // {
    //     public override void Start()
    //     {
    //         Console.WriteLine("Hello buddy");
    //     }
    // }

    internal class Program
    {
        static void Main ()
        {
            BaseDevice baseDevice = new AdvancedDevice();
            baseDevice.Start();
        }
    }
}