// 자료형이 없는 JS이므로 대신 function 키워드를 입력한다.
function LinearSearch(pArr, nKey)
{
    for(var i = 0; i< pArr.length; i++)
        {
            if(nkey == pArr[i])
            {
                printf("찾는 값은 %d 번째에 았숩니다.\n", i + 1);
                return i;
            }
        }
        return -1;
}
// 타입이 없는 자바스크립트

var ar= [23,47,19,63,57,26,75,73,82,89,47,11]; //new Array가 생략된 형태가 JS
// ar은 new연산자를 받는 포인터
var key = 75; // js에서는 정수형 문자형아닌 숫자형 => new Number(75) 이는 Number객체
// JS or Java 객체는 사이즈 정보를 담고 있다.
// '.'을 눌렀을 때 멤버 함수와 멤버 변수가 있다는 것은 객체라는 의미
// ar.length length 배열의 크기가 담긴 멤버함수

var idx = LinearSearch(ar, key);

if(idx == -1){
    console.log("찾는 값이 없습니다.");
}else{
    console.log("찾는 값이" + (idx+1) + "번째 있습니다.");
}

