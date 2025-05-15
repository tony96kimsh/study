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
var option = ['kim'];
console.log(option);
