const pro1 = (pid) => {
    return new Promise((resolve, reject) => {    
        setTimeout(function(){
            if(pid == 'test') {
                resolve('pro1 success')
            } else {
                reject('pro1 fail')
            }
        }, 1000)
    });
}

const pro2 = (pwd) => {
    return new Promise((resolve, reject) => {    
        setTimeout(function(){
            if(pwd == '1111') {
                resolve('pro1 success')
            } else {
                reject('pro1 fail')
            }
        }, 1000)
    });
}


const id = 'test';
const pw = '1111';

pro1(id)
.then(function(result) {    
    console.log('then result', result);
    return pro2(pw);
})
.then((function (result) {
    console.log('then result2', result);
}))
.catch(function(result){
    console.log('catch result', result);
})