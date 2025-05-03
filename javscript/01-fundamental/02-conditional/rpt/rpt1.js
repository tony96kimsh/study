/**
 * 사용자로부터 두 개의 정수를 입력 받는다. 입력한 두 정수를 그대로 출력하는 프로그램을 작성하라
 * 참고 : 입력창은 var score = prompt("입력");
 * 각 수의 형변환(타입캐스팅)은 Number(score) 와 같이 하면 됩니다. */

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


rl.question('a, b값을 입력해주세요 : ', (input) => {
    const [num1, num2] = input.split(' ').map(Number);

    console.log(Number(a), Number(b));
    
    rl.close()
});

