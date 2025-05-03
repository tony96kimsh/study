var nickName = function(){
    console.log('익명함수 변수')
};

nickName(); // 함수포인터

nickName = function() {
    console.log('second')
};

nickName();