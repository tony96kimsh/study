// 타입별칭
// 타입 or 타입들의 조합 
// type 이름 = 타입 or 타입들의 조합

// 타입 재정의

// c에서는 #define, #typedef
// type ID = string | number;

// let userId : ID;
// userId = '1234';
// console.log(userId);
// userId = 1234;
// console.log(userId);

// type User = {
//   name : string;
//   age : number;
//   email?: string;
// };

// const user1 : User = {
//   name: '김장군',
//   age: 130,
//   email: 'KingGodGeneral@king.com',
// }

// const user2 : User = {
//   name: '최보스',
//   age: 80,
// }

// console.log(user1, user2);

// 함수 타입 별칭
// type Operation = (x : number, y: number) => number;
 
// const Plus : Operation = (a, b) => a + b
// const Minus : Operation = (a, b) => a - b
// console.log(Plus(5, 3));
// console.log(Minus(5, 3));

// 타입 별칭과 인터페이스 결합
// type MyLocation = {
//   country : string;
//   city: string;
//   zipCode: string;
// }

// interface Company {
//   name: string;
//   employees: number;
//   location: MyLocation;
// }

// const company : Company = {
//   name: '코스타',
//   employees: 10,
//   location: {
//     country : '대한민국',
//     city: '서울',
//     zipCode: '12345',
//   }
// }

// console.log(company);

// 리터럴타입
// type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

// function sendRequest(method: RequestMethod) {
//   console.log(`Seding a ${method} request.`);
// }

// sendRequest("GET");
// sendRequest("POST");
// sendRequest("FATCH"); // error

// type DiceRoll = 1| 2| 3| 4| 5| 6;

// function rollDice (): DiceRoll {
//   const result = (Math.floor(Math.random() * 6) + 1) as DiceRoll;
//   return result;
// }

// const roll = rollDice();
// console.log(roll);

// type isActive = true | false;

// function toggle(active: isActive) {
//   if(active) {
//     console.log("뷸켜짐");
//   } else {
//     console.log("불꺼짐");
//   }
// }

// toggle(true);
// toggle(false);

// function getStatus(code : 200) : "Success";
// function getStatus(code : 404) : "Not Found";
// function getStatus(code : 500) : "Server Error";

// function getStatus(code: number) : string{
//   switch(code) {
//     case 200 : return "Success"
//     case 404 : return "Not Found"
//     case 500 : return "Server Error"
//     default : return "Unknow Status";
//   }
// }

// console.log(getStatus(200));

//타입 가드
// typeof를 사용한 타입 가드
// function printValue(value : string | number) {
//   if(typeof value === 'string') 
//   {
//     console.log(`string : ${value}`);
//   } else {
//     console.log(`number : ${value}`);
//   }
// }
// printValue("타입스크립트")
// printValue(100)

// instanceof
class Dog {
  bark () {
    console.log('멍멍 주인님.');
  }
}

class Cat {
  meow() {
    console.log('이봐 김집사');
  }
}

function makeSound(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);
