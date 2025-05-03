//  var num = 10;

//  if(num > 10) {
//     console.log('10보다 큼')
//     //Can omit semicolon in Javascript of interpriter language
//  }else if (num > 10) {
//     console.log('10보다 작다')
//  }else if (num == 10) {
//     console.log('num = 10')
//  }

// var num = 5;

// if(num > 10) {
//     console.log('10보다 큼')
// } else {
//     console.log('10보다 크지 않다')    
// }

// const readline = require();

// const rl = readline.createInterface({
// 	input : process.stdin,
// 	output : process.stdout,
// });

// rl.question('프로그래밍 언어를 입력하시오 : ', function(data){
//     // 입력값에 대한 처리
//     console.log('가장 좋아하는 프로그래밍 언어는' + data + '입니다.');


//     rl.close()
// });

//
// const readline = require('readline');

// const rl = readline.createInterface({
// 	input : process.stdin,
// 	output : process.stdout,
// });

// rl.question('정수를 입력하세요: ', (data) => {
//     // 입력값에 대한 처리
//     let result;
//     (data % 2) ? 
//     result = "홀수입니다.":
//     result = "짝수입니다.";

//     console.log(result);

//     rl.close()
// });

// const readline = require('readline');

// const rl = readline.createInterface({
// 	input : process.stdin,
// 	output : process.stdout,
// });

// rl.question('정수를 입력하세요: ', (data) => {
//     if( data >= 90 && data <= 100 ) {
//         console.log("장학생입니다.")
//     }
//     if(data >= 60 && data <= 100) {
//         console.log("합격")        
//     } else if(0 < data < 60){
//         console.log("불합격")
//     } else {
//         console.log("유효하지 않은 점수입니다.")
//     }

//     rl.close()
// });

// const readline = require('readline')

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// })
// const choice = 0;
// let msg;
// rl.question('드라이브를 포멧하시겠습니까? Y/N ', data => {
//     if(data == 'y' || data == 'Y') {
//         msg = '네 드라이브를 포멧하겠습니다.'
//     } else {
//         msg = '아니오, 드라이브를 포멧하겠습니다.'
//     }
//     console.log(msg);

//     rl.close ();
// })

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let score;

rl.question("점수를 입력하세요", (data) => {
    score = data;

    if(score >= 91 && score <= 100) {
        console.log("A학점")
    }else if(score >= 81 && score <= 90) {
        console.log("B학점")
    }else if(score >= 71 && score <= 80) {
        console.log("C학점")
    }else if(score >= 61 && score <= 70) {
        console.log("D학점")
    }else {
        console.log("F학점")
    }

    rl.close();
})