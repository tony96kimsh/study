const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question("커피를 선택하세요", (coffee) => {
    switch(coffee)
    {
        case '아메리카노':
            console.log("아메키라노 주문완료")
            break;
        case '라떼':
            console.log("라뗴 주문완료")
            break;
        case "수박주스":
            console.log("수박주스 주문완료")
            break;
        default:
            console.log("존재하지 않는 상품입니다.")
            break;
    }

    rl.close();
});