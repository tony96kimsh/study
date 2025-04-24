var savedUser = '최대리';
var savedPw = '1111'

function account(userId = 'Tony', userPw = '1111') {
    //debug
    console.log(userId);
    console.log(userPw);


    if(userId == savedUser) {
        if (userPw == savedPw) {
            console.log('반갑습니다. ' + userId + '님');
            return;
        }
    }else {
        console.log('로그인 실패했습니다.')
    }
}
account();
account('최대리', '2222');