/** 커피 자판기가 있다. 100원 넣으면 ‘블랙커피’, 
200원을 넣으면 ‘밀크커피’가 나온다. 자판기가 함수와 같은 블랙박스라고 했었다. 
자판기를 함수로 구현해보자. 
즉, 사용자로부터 정수형 가격(100, 200)을 입력 받아 100을 입력 받으면 ‘블랙커피’를 출력하고,
 200을 입력 받으면 ‘밀크커피’를 출력하면 된다. */

 let result = "";

 function getCoffee(cost) {
    if(cost == 100) {
        result = "블랙커피";
    } else if(cost == 200) {
        result = "밀크커피";
    }
 }

function setCoffee(){
    console.log(result);
}

console.log('100원 투입')
getCoffee(100);
setCoffee();

console.log('200원 투입')
getCoffee(200);
setCoffee();