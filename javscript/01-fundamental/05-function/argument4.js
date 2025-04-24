const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function checkAge(age) {
    if(age > 19 && age <= 100) {
        return true;
    }else {
        return false;
    }
}

rl.question('나이를 입력하세요 : ', (ag) => {
    if(checkAge(ag)){
        console.log("통과");
    }else {
        console.log("놉");
    }

    rl.close();
})