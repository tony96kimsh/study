let num = 0;

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let i = 1;
rl.question('구구단을 입력하세요 : ', (input) => {
    num = Number(input);    
    while(i <= 9) {
        console.log( num + " * " + i + "= " + num * i)
        i++;
    }
    rl.close()
});