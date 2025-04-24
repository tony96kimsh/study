/** 사용자로부터 점수값을 입력 받는다. 점수값은 정수이다. 
 * 점수값이 60점 이상이면 “합격입니다.”를 출력하고,
 * 60점 미만이면 “불합격입니다.”를 출력하라. */
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})
let msg = "";

rl.question('성적 입력 : ', data => {
    if(data >= 60 && data <= 100) {
        msg = "합격입니다."
    } else if (data <= 60 && data >= 0) {
        msg = "불합격입니다."
    } else {
        msg = "유효한 값이 아닙니다."
    }
    console.log(msg);

    rl.close();
})

