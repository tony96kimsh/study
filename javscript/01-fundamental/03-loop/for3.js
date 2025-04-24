let num = 0;

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


rl.question('구구단을 입력하세요 : ', (input) => {
    num = Number(input);
    for (var i = num; i <= 100; i++) {
        console.log("충전중 : " + i);
    }
    console.log("충전완료되었습니다.");
    
    rl.close()
});