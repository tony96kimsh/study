/**사용자로부터 3 개의 정수를 입력 받는다. 
 * 입력한 세 정수의 합과 평균을 출력하는 프로그램을 작성하라.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const inputs = [];
const questions = [
    '첫 번째 값을 입력하세요: ',
    '두 번째 값을 입력하세요: ',
    '세 번째 값을 입력하세요: ',
]
let sum = 0;
let avg = 0;

const askQuestion = (index) => {
    if (index === questions.length) {
        avg = sum / Number(questions.length);


        console.log("합 : " + sum);
        console.log("평균 : " + avg);


        rl.close();
        return;        
    }
    
    rl.question(questions[index], (data) => {
        inputs.push(Number(data));
        sum += Number(data);

        askQuestion(index + 1);
    });
}

askQuestion(0);