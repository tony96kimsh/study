/**사용자로부터 두 개의 정수를 입력 받아 사칙 연산의 결과를 출력해보자.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let a, b;

rl.question('1st value: ', data1 => {
    a = Number(data1)
    rl.question('2nd value: ', data2 => {
        b = Number(data2)
        console.log(`${a}, ${b}`);
        console.log(`a + b = ${a + b}`);
        console.log(`a - b = ${a - b}`);
        console.log(`a * b = ${a * b}`);
        console.log(`a / b = ${a / b}`);

        rl.close();
    })
})