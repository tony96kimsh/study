// function greet(name: string) : string {
//     return `Hello, ${name}`;
// }

// const message = greet('Typescript');
// console.log(message);

// let myname = 'lee';
// myname = 'kim';

//배열의 타입 추론

// let numbers = [1, 2, 3, 4, 5];

// // 함수 리턴 타입 추론
// function add(x : number, y : number) { // 함수의 타입 명시 없어도 리턴형에 맞춰서 타입 추론
//     return x + y;
// }

// 객체 리터럴 타입 추론
// let student = {
//     name : 'kim',
//     age : 25,
//     course: 'typescript'
// }

// // student.name = 10; // error!
// student.course = 'javascript';

// 기본 데이터 타입 명시
// let lang: string = "Typescript";
// let age: number = 30;
// let isAvail : boolean = true;

// // 변수 타입 스트링 또는 널값
// let value : string | null = null;
// value = "Typescript";
// console.log(value);

// value = null;
// console.log(value);

// 함수의 데이터 타입
// function multiply (a : number, b : number) : number {
// return a * b;
// }



// console.log(multiply(5, 3));

// 함수에서 매개변수를 생략할 수 없는 경우
// function sayHello(name : string) : string{
//     return `Hello, ${name}`
// }

// let greet = sayHello("Typescript");
// console.log(greet);


// 선택적 매개변수
// function sayHello(name : string, lang?:string) : string{
//     return lang ? `Hello, ${name} ${name}` :
//         `Hello, ${name}`
// }

// let greet = sayHello("Typescript", "React");
// console.log(greet);

// function multiply(a: number, b:number = 1) : number {
//     return a * b;
// }
// console.log(multiply(5));
// console.log(multiply(5, 3));


// // 나머지 매개변수
// function sumAll(...numbers : number[]) : number {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// reduce () “배열을 하나의 값으로 줄여주는” 역할

// console.log(sumAll(1, 2, 3, 4, 5));


// 함수 자체를 변수에 할당할 때 
// let myFunc : (a : number, b : number) => number;

// myFunc = function (x : number, y : number) : number {
//     return x + y;
// }

// console.log(myFunc(5, 10));

// 배열의 타입
// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers);

// let strings : string[] = ['one', 'two', 'three'];
// console.log(strings);



// function printNames(names : string[]) : void {
//     names.forEach(function(name){
//         console.log(name);
//     });
// }

// printNames(['kim', 'park', 'lee']);

// 튜플 : 요소의 타입을 고정
// let tuple : [string, number, boolean]
//     = ['lee', 40, true];
// console.log(tuple[0]);
// console.log(tuple[1]);
// console.log(tuple[2]);

// 튜플을 이용한 리턴값
// function getPerson() : [string, number] {
//     return ["park", 30];
// }

// let person = getPerson();
// console.log(person[0]);
// console.log(person[1]);

// 선택적 요소를 가진 튜플
// let option : [string, number?] = ['kim'];
// console.log(option);

// 객체 = {키 : 값} 
// const book : {title : string, author : string, year: number}  = {
//     title : "리액트의정석",
//     author : "lch",
//     year : 2025,    
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.year);

// const author : {
//     name : string,
//     books : {title : string, year : number}[]
// } = {
//     name : "lch",
//     books : [
//         {title : "타입스크립트", year : 2025},
//         {title : "리액트", year : 2025},
//     ],
// }

// console.log(author.name);
// console.log(author.books[0]);
// console.log(author.books[1]);


// 선택적 속성
// const user : {name:string, age?:number} = {
//     name : 'ksh',
// }

// console.log(user);
// user.age = 30;
// console.log(user);

// 읽기전용 속성
// const car : {
//     readonly brand : string,
//     year : number,
// } = {
//     brand : "대우",
//     year : 1999,
// }

// car.brand = "삼성";
// console.log(car);

// 객체의 타입과 함수 결합
// const person : {
//     name : string,
//     greet() : string,
// }= {
//     name : "낌쎵휸",
//     greet() {
//         return `안녕하쇼 ${this.name}`
//     },
// }

// console.log(person.greet())

// 인터페이스 : 본질 : 타입

// interface Book {
//     title : string;
//     author : string;
//     year : number;  
// }

// const myBook : Book = {
//     title : "Node.js",
//     author : "lch",
//     year : 2023,
// }

// console.log(myBook);
// console.log(myBook.title);
// console.log(myBook.author);
// console.log(myBook.year);

// interface User {
//     readonly username : string;
//     email? : string;
// }

// const newUser : User = {
//     username : "김성훈",
//     // email : "sung@naver.com",
// }

// console.log(newUser);
// newUser.email = "sung@naver.com";
// // newUser.username = "최고집"; // error
// console.log(newUser);


// 인터페이스로 함수 타입 정의
// interface Cal {
//     plus(a:number, b:number) : number;
//     minus(a:number, b:number) : number;
// }

// const myCal : Cal = {
//     plus(a, b) {
//         return a + b;        
//     },
//     minus(a, b) {
//         return a - b;        
//     }
// }

// console.log(myCal.plus(10, 5));
// console.log(myCal.minus(10, 5));

// 인터페이스 간의 상속

// interface Person {
//     name : string;
//     age : number;    
// }

// interface Employee extends Person {
//     empId: number;
// }

// class CompanyEmp implements Employee {
//     name: string ;
//     age: number;
//     empId : number;

//     constructor(name : string, age : number, empId : number) {
//         this.name = name;
//         this.age = age;
//         this.empId = empId;
//     }
// }

// const emp = new CompanyEmp("김트럭", 20, 1234);

// console.log(emp.name);
// console.log(emp.age);
// console.log(emp.empId);


// // const emp : Employee = {
// //     name : "최배달",
// //     age : 50,
// //     empId : 123456,
// // };

// // console.log(emp);
// // console.log(emp.name);
// // console.log(emp.age);
// // console.log(emp.empId);

// 열거형
// enum Direction {
//     Up = "Up",
//     Down = "Down",
//     Left = "Left",
//     Right = "Right",
// }
// class Character {
//     x: number = 0;
//     y: number = 0;

//     getPosition(){
//         return { x : this.x, y : this.y};
//     }

//     move (dir : Direction) {
//         if(dir === Direction.Up) this.y -= 1;
//         else if (dir === Direction.Down) this.y += 1;
//         else if (dir === Direction.Left) this.x -= 1;
//         else if (dir === Direction.Right) this.x += 1;
//         console.log(`Move ${Direction[dir]}`);
//     }
// }

// const character = new Character();
// character.move(Direction.Down);
// console.log(character.getPosition());
// character.move(Direction.Right);
// console.log(character.getPosition());


// console.log(Direction.Up); // 0
// console.log(Direction.Down); // 1

// Any 타입 : 타입체크 안함
// let anyValue : any = "Anything!";
// console.log(anyValue);

// 유니온 타입: 두가지 이상의 타입을 지정
// 공용체  union
// let val :number | string = "100"; // 숫자아니면 문자
// val = '문자열';
// val = true; // boolean해당 없으므로 불가

// function printId(id : number | string) {
//     if (typeof === string) {
//         console.log(`Your id is : ${id.toUperCase()}`);
//     } else {
//         console.log(`your id is : ${id}`); 
//     }
// }

// printId(123);
// printId('123');

// function getLength(value : string | string[] | string[]) : number{
//     return value.length;
// }
// console.log(getLength(['hello']));
// console.log(getLength(["apple"], [], [])); 

// let values : (number | string)[] = [1, "hello", 2, "world"]

// values.push(3);
// values.push("test");
// console.log(values);;

//  객체 속성에 유니온 타입
interface Person {
    name : string;
    age: number | string;   
}

const person1 : Person = {
    name : "lee",
    age : 30,
}

const person2 : Person = {
    name : "lee",
    age : 30,
}

console.log(person1);
console.log(person2);