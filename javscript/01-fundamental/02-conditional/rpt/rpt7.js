/** 사용자로부터 두 개의 정수를 입력 받는다. 
 * 입력한 두 수를 비교하여 큰 수를 출력하라. */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let max = 0;

let a, b;
rl.question('값1: ', (data1) => {
    a = Number(data1);
    rl.question('값2: ', (data2) => {
        b = Number(data2);
        max = a > b ? a : b;
        console.log("최대값은 " + max);

        rl.close();
    })
})``