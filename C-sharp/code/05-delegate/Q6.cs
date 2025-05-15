/* 
# 문제 .6 (난이도: 중) 델리게이트를 통한 동적 작업 스케줄러

사용자가 선택한 작업(예: 저장, 삭제, 수정)에 따라 알맞은 메서드를 실행하도록 델리게이트를 설계하라.  
`Action<string>` 형태의 델리게이트를 사용하고, 
사용자 입력에 따라 동적으로 메서드를 바인딩해 실행하는 콘솔 앱 코드를 작성하라.

- Action은 반환값이 없는 메서드를 나타내는 제네릭 델리게이트입니다.
- Action<T>: 하나의 T 타입 매개변수를 받는 델리게이트
- Action<T1, T2, ..., Tn>: 여러 개의 매개변수를 받을 수 있는 델리게이트 (최대 16개)
- Action: 매개변수도 없고, 반환값도 없는 델리게이트

*/
using System;

namespace MyApp
{
    public class Work
    {
        private string total;
        public Work()
        {
            total = "";
        }

        public void Save(string a)
        {
            total = a;
            Console.WriteLine($"저장할 내용을 입력하세요: {a}");
            Console.WriteLine($"내용 : {total}");

        }

        public void Delete()
        {
            Console.WriteLine("삭제 실행");
            total = "";
        }
        public void Edit (string a) 
        {
            total = total + a;
            Console.WriteLine($"편집할 내용을 입력하세요: {a}");
            Console.WriteLine($"내용 : {total}");
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Work work = new Work();

            // Action<string> 델리게이트를 사용하여 메서드 바인딩

            Action<string> save = work.Save;
            Action<string> edit = work.Edit;
            // Action 델리게이트를 사용하여 Delete 메서드 바인딩(매개변수 없음)
            Action delete = work.Delete;

            // 사용자 입력에 따라 메서드 실행
            save("안녕하세요");
            edit("감사합니다.");
            delete();
            
        }
    }
}