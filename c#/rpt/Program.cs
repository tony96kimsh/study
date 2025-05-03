/*
도형을 나타내는 Shape 클래스와 그의 하위 클래스인 Circle 클래스가 있습니다.
Shape 클래스에는 GetArea() 메서드가 있습니다. 

Circle 클래스에서 이 메서드를 오버라이딩하여 원의 넓이를 구하고 반환하도록 정의합니다. 
(원의 넓이 공식은 반지름 * 반지름 * 3.14입니다.) Shape와 Circle 클래스를 각각 정의하고 GetArea 함수의 오버라이딩 관계를 정의한 후,
 Main 함수 안에서 Circle 객체를 생성하고 원의 넓이를 구하여 화면에 출력하시오.

도형을 나타내는 Shape 클래스와 그의 하위 클래스인 Circle 클래스가 있습니다. 
Shape 클래스에는 GetArea() 메서드가 있습니다. 
Circle 클래스에서 이 메서드를 오버라이딩하여 원의 넓이를 구하고 반환하도록 정의합니다.
(원의 넓이 공식은 반지름 * 반지름 * 3.14입니다.)

Shape와 Circle 클래스를 각각 정의하고 GetArea 함수의 오버라이딩 관계를 정의한 후, 
Main 함수 안에서 Circle 객체를 생성하고 원의 넓이를 구하여 화면에 출력하시오.
*/
using System;

class Shape {
    protected int radius;

    public Shape(int radius) 
    {
        Console.WriteLine("부모 생성자");
        this.radius = radius;
    }
    public virtual double GetArea() 
    {
        Console.WriteLine("부모 함수");
        return 0;
    }
}

class Circle : Shape {
    public Circle (int radius) : base(radius) 
    {
        Console.WriteLine("자식 생성자");
    }

    public override double GetArea() 
    {
        //반지름 * 반지름 * 3.14
        Console.WriteLine("자식 함수", radius);
        return radius * radius * 3.14;
    }
}

class Program
{
    static void Main()
    {
        // 반지름 입력
        Console.Write("원의 넓이를 입력하세요: ");
        int radius = int.Parse(Console.ReadLine());

        // 객체생성
        Circle cir = new Circle(radius);
        double area = cir.GetArea();
        Console.WriteLine($"원의 넓이: {area}");

    }
}