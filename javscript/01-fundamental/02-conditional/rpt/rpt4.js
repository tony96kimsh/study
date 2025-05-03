/**사용자로부터 3개의 정수를 입력 받아서, 3개의 수를 곱한 결과를 출력하라. 
 * 출력 예) 세 개의 정수를 입력하세요 : 2 3 4 세 수의 곱은 24입니다.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputs = [];
const questions = [
    '1st: ',
    '2nd: ',
    '3rd: ',
];
let result = 1;
const askQuestion = index => {
    if(index === questions.length) {   
        
        for(let i = 0; i < inputs.length; i++ ) {
            result *= inputs[i];
        }
        console.log(`${inputs.join(', ')} 세 수의 곱은 ${result}입니다.`);

        rl.close()
        return;
    }

    rl.question(questions[index], (data) => {
        inputs.push(Number(data));
        askQuestion(index + 1);
    })
}




askQuestion(0)