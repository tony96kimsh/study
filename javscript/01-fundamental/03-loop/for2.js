let num = 0;

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


rl.question('구구단을 입력하세요 : ', (input) => {
    num = Number(input);
    for (var i = 1; i <= 9; i++) {
        console.log( num + " * " + i + " = " + num * i);
    }
    
    rl.close()
});