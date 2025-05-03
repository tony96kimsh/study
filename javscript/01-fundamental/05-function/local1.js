function account () {
    var savedUser = "박지성";
    console.log("안녕하세요 " + savedUser + ' 님');

}

account();

// Err!!! ReferenceError: savedUser is not defined
console.log("안녕하세요 " + savedUser + ' 님'); 