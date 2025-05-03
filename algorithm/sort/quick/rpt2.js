const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})


let nums = [];
let size = 0;

const QuickSort = function (nums, left, right) {
    if (left >= right) return;

    let pivot = left;
    let low = left + 1;
    let high = right;

    while(low < high) {
        while(low < right && nums[pivot] > nums[low]) low++;
        while(high > left && nums[pivot] <= nums[high]) high--;
        if(low < high) {
            [nums[low], nums[high]] = [nums[high], nums[low]];
        }
    }
    [nums[pivot], nums[high]] = [nums[high], nums[pivot]];
    QuickSort(nums, left, high - 1);
    QuickSort(nums, high + 1, right);
}

const inputNum = function () {
    rl.question('값의 개수를 입력 : ', unit => {  
    unit = Number(unit);
    size = unit;
    rl.question('값 입력(공백 구분)', input => {
        nums = input.trim().split(" ").map(Number);

        console.log("정렬 전: " + nums);
        QuickSort(nums, 0, size - 1);
        console.log("정렬 후: " + nums);

        
        rl.close();
    })
    })
}

inputNum();
// 5개
// 입력: 5 3 8 1 2