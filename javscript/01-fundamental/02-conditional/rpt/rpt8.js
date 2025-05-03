/**사용자로부터 세 개의 정수를 입력 받는다.
 *  입력 받은 세 개의 정수를 비교하여 
 * 그 중 가장 작은 최소값을 출력하는 프로그램을 작성하라.*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let min = 0;
const askQuestion = () => {
 rl.question('3개의 정수를 입력해주세요 e.g) 1, 2, 3 : ', data => {
    data = data.split(",");
    if(data.length == 3 ) {
        data[0] < data[1] ?
            min = data[0] :
            min = data[1];
        min < data[2] ?
            min :
            min = data[2]; 
        console.log(min)

        rl.close()
        return;
    } else {å
        askQuestion();
    }
})
}

askQuestion();