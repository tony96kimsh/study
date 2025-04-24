// var a = 3;
// var b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);
// // 피연산자, 단항연산자, 이항연산자
// // x + 3일 때 "x +" 피연산자
// // +3 단항연산자

// // 숫자 + 숫자, 3 + 2
// // 문자열 + 문자열, 'A' + 'B'

// console.log("기안" + 84);

// console.log(+"110" + 4);
// console.log(+"기안" + 84);

// console.log(+true);
// console.log(+false);

// // - operator
// console.log('10' - 2);
// console.log('10' * 2);
// console.log('10' / 2);

// 할당연산자 assign operator
// var a = 3;
// var b = a + 2;
// var c = b - a;


// // let a = 10;

// console.log(++a);
// console.log(a++);
// console.log(a++);
// console.log(a);

// var a = 10;
// var b = '10';

// console.log(a > b);

// console.log(a != b);
// console.log(a !== b);

// console.log(a == b);
// console.log(a === b);

// console.log('A' < 'B');
// console.log('ABC' < 'ABD');
// console.log('A' == true);

// console.log(300 > '200');
// console.log(2 > '002');

// console.log(null == undefined);
// console.log(null == 0);

// var age = 30;
// var result = (age > 65 || age < 7)? 'support' : 'none'

// console.log(false || 'batman'); // it is true that have value and print out value
// console.log(true || 'batman'); // result true because process front value if exist true
// console.log('superman' || true); 


// console.log('-50' || 50);
// // port 값 받을 때 많이 사용
// console.log( '3000' || '8080');
// let getPort = null;
// console.log( getPort || '8080');

// console.log(!0);
// console.log(!null);
// console.log(null == 0);

// nullish coalescing operator ??
var id = 'tony';

let result = 
(id !== null && id !== undefined) ? "입력되었습니다.":"아이디가 입력되지 않았습니다.";

let result2 = 
(id ?? null) ? "입력되었습니다.":"아이디가 입력되지 않았습니다.";
// id ?? null  ===> null 혹은 undefined라면 false리턴

value = null;
let result3 = value ?? "Error!!!";

console.log(result);
console.log(result2);
console.log(result3);