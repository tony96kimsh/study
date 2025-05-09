// var 변수의 사용 기준: 함수
// let 변수의 사용 기준: 중괄호

// function myTest () {
//     if(true) {
//         let x = 100;
//     }
//     console.log(x);
// }
// myTest();  


function myTest () {
    if(true) {
        const x = 100;
        x = 200;
        
    }
    console.log(x);
}
myTest();  