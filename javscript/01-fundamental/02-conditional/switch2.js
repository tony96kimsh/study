const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("핫키 입력", (hotkey) => {
    switch(parseInt(hotkey))
    {
        case 1:
            console.log("엄마 선택")
            break;
        case 2:
            console.log("아빠 선택")
            break;
        case 3:
            console.log("형 선택")
            break;
        default:
            console.log("유효하지 않은 값")
            break;
    }

    rl.close();
});