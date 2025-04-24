function showMsg() {
    console.log("Hi")
}

function plus(a, b) { // a = new String('abcd'), b = new Number(20)
    console.log('두 수의 합: ' + (a + b));
}

plus(10, 20);
plus('abcd', 'efgh');
plus(3.14, 1.59);
plus('abcd', 1.59);