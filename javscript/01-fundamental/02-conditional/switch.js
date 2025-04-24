// var n = 2;
// switch(n)
// {
//     case 1:
//         console.log("1번 선택")
//         break;
//     case 2:
//         console.log("2번 선택")
//         break;
//     case 3:
//         console.log("3번 선택")
//         break;
//     default:
//         console.log("유효하지 않은 값")
//         break;
// }

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let grade;

rl.question("점수를 입력하세요", (data) => {
    if ( 100 >= grade > 0) {
        grade = ( parseInt(Number(data) -1 )/ 10);
    }
    
    switch(grade) {
        case 9 :
            console.log("A학점");
            break;
        case 8 :
            console.log("B학점");
            break;
        case 7 :
            console.log("C학점");
            break;
        case 6 :
            console.log("D학점");
            break;
        case 5 :
        case 4 :
        case 3 :
        case 2 :
        case 1 :
        case 0 :
            console.log("F학점");
            break;
        default:
            console.log("유효하지 않은 값"); 
            break;
    }

    rl.close();
})