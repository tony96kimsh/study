const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let arr = [];

function inputNum() {
    return new Promise(resolve => {
        rl.question("정수 값을 공백으로 구분하여 입력해주세요: ", (input) => {
            const inputArr = input.trim().split(" ").map(Number);    
            arr.push(...inputArr);
            rl.close();
            resolve();
        });
    });
}

function QuickSort(left, right) {
    if(left >= right) return;

    let pivot = left;
    let low = left + 1;
    let high = right;

    while(low <= high) {
        while(arr[low] <= arr[pivot] &&  low <= high ) low++;
        while(arr[high] > arr[pivot] && high >= low) high--;

        if (low < high) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
        }
    }
    [arr[pivot], arr[high]] = [arr[high], arr[pivot]];
    QuickSort(left, high - 1);
    QuickSort(high + 1,  right);    
}

// main
async function main () {
    await inputNum();
    console.log("정렬 전 : ", arr);
    QuickSort(0, arr.length-1);
    console.log("정렬 후 : ", arr);
}

main();



//입력: 5 3 8 1 2 -1