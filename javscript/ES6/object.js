// let num = 100;
// const user = '김성훈';

// key value 형태 파이썬에서는 딕셔너리

// let dic = new Object();
// 객체 키밸류 형태로 대입
// dic.boy = "소년";
// dic.girl = "소녀";
// dic.friend = "친구";

// 객체 리터럴 => 중괄호를 통해 객체 생성
// const dic = {
//     boy : "소년",
//     girl : "소녀",
//     friend : "친구",
//     present : "현재",
// }
// // 속성 추가 방법
// dic.apple = "사과";
// dic.ten = 10;

// console.log(dic.boy);
// console.log(dic.girl);
// console.log(dic.friend);
// console.log(dic.apple);
// console.log(dic.ten);

// //삭제 
// delete dic.apple;

// console.log(dic.boy);
// console.log(dic.girl);
// console.log(dic.friend);
// console.log(dic.apple);
// console.log(dic.ten);

// // 수정
// dic.present = '선물';
// console.log(dic.present);

// // const dic = new Object{} 형태
// const dic = {
//     present : '현재',
// }

// dic = {}; // dic = new Object {}

// console.log(dic.present);
// // 새로운 객체를 할당 => 주소값이 변경됨 => 상수므로 불가함

// key : value 형태에서 값을 메소드로 지정할 수 있다.
// 이는 메소드가 함수포인터를 의미한다.
// const unit = {
//     attack : function (weapon) {        
//         return `${weapon}으로 공격한다.`
//     }
// }
// const unit = {
//     attack(weapon) {        
//         return `${weapon}으로 공격한다.`
//     }
// }

// console.log(unit.attack("주먹"));
// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// 대괄호 표기법
// const dic = {
//     boy : "소년",
//     girl : "소녀",
//     friend : "친구",
//     present : "현재",
// }
// rl.question('찾을 단어를 입력하세요 : ', function(key) {
//     let word = key;
//     console.log(dic[word]);

//     rl.close();
// })

// const readline = require('readline')
// const rl = readline.createInterface({
//     output:process.stdout,
//     input:process.stdin,
// })

// // 계산된 프로퍼티

// rl.question('다이소 무조건 천원 상품 입력: ', function(key) {
//     let basket = {
//         [key] : '1000원',
//     }
    
//     console.log(basket[key]);

//     rl.close();
// })

// 단축 프로퍼티: 객체의 키와 값의 이름이 같은 경우
// let id = 'jamsu';
// let pw = '1111';

// let user = {
//     id,
//     pw
// }

// console.log(user.id)
// console.log(user.pw)


/*
for in
foreach
 */
// let user = {
//     id : "tony",
//     pw : "1234",
//     name : 'ksh',
//     mobile : "010",
//     country : '대한민국',
// }

// for(let info in user) {
//     // 순회하는 info는 키값
//     console.log(`${info} : ${user[info]}`);
// }

// 구조 분해 할당, 비구조할당
// const color = ['red', 'green', 'blue'];
// let [r, g, b] = color;

// console.log(r, g, b);


// 배열의 기본값 설정
// const [a, b, c = 'c언어'] = ['C#', 'Java', 'python']

// 쉼표로 값을 할당하지 않을 수 있음
// const [a, ,b, c = 'c언어'] = ['C#', 'Java', 'python', '리액트']
// console.log(a, b, c);

// 배열의 나머지 요소 가져오기
// const [a, b, ...rest] = ['C#', 'Java', 'python', '리액트', 'C++']
// console.log(a, b);
// console.log(rest);
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest[2]);

// 배열끼리 결합
// const arr1 = ['C#', 'java'];
// const arr2 = ['python', 'react', 'C++'];

// let result;
// console.log(arr1 + arr2); // 문자열로 전환되서 붙는데 사이 반점이 없음
// console.log([...arr1, ...arr2]);

// 객체의 구조분해할당

// let user = {키1 : 값1, 키2 : 값2}

// let userid = user.id;
// let userpw = user.pw;
// let username = user.name;
// let userage = user.age;

//객체의 구조분해 할당
// let {id='guest', pw='1111', name, age} = {
//     id : 'star',
//     pw : '1234',
//     name : '별',
//     age : 30,
// };

// console.log(id);
// console.log(pw);
// console.log(name);
// console.log(age);

// 객체의 나머지 요소 가져오기
// let {id, ...rest} = {
//     id : 'star',
//     pw : '1234',
//     name : '별',
//     age : 30,
// };

// console.log(id);
// console.log(rest);
// console.log(rest.pw);

