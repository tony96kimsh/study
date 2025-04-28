const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
let arr = ['N', 'N', 'N', 'N', 'N', 'N'];
let size = arr.length;

const Swap = function(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


rl.question('input 6 number use space between number : ', (data) => {
    arr = data.split(' ').map(Number);

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size - i; j++) {
            if(arr[j] > arr[j+1]) {
                Swap(arr, j, j+1)
            }
        }
        console.log(arr)
    }  

    rl.close();
})