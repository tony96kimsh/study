/**사용자로부터 두 개의 정수를 입력 받는다. 입력한 두 정수를 그대로 출력하는 프로그램을 작성하라.

참고 : 
입력창은 var score = prompt("입력");
각 수의 형변환(타입캐스팅)은 Number(score) 와 같이 하면 됩니다. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('첫 번째 값: ', e1 => {
    a = Number(e1); // 첫 번째 입력 값을 숫자로 변환

    rl.question("두 번째 값: ", e2 => {
        b = Number(e2);
        console.log(`value1: ${e1}, value1: ${e2}`)

        rl.close();
    })
})
