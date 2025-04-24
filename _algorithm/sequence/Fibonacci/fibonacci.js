const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,    
})

let cyc;
let arr = [0, 1];
let sum;

const getFbc = (ar, num) => {
    for(let i = 0; i < num - 1; i++) {
        ar.push(ar[i] + ar[i + 1]);
    }
}


const askCycle = () => { 
    rl.question('파보나치 연산 수 입력: ', e => {
        cyc = Number(e);
        if(!(cyc > 0 && cyc <= 20)) {
            console.log('조건에 맞지 않아요. 다시 입력하세요.');
            askCycle();
        } else {
            getFbc(arr, cyc)
            console.log(arr);
            rl.close();
        }
    })
}

askCycle();
