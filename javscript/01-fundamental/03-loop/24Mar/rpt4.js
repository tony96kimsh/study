const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let result = 0;
rl.question("1부터 합이 될 수 x : ", data => {
    data = Number(data);
    for(let i = 0; i < data; i ++) {
        result += i + 1
    }
    console.log(result)
    
    rl.close();
})