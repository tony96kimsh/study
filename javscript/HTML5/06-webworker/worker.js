onmessage = function(event) {
    var rcv = event.data;
    stopOperation();
    var sendData = rcv + "백그라운드에서 동작합니다.";
    this.postMessage(sendData);
}

function stopOperation () {
    //error debug
    test();
    var endTime = new Date().getTime() + 5000;
    while(new Date().getTime() < endTime);
}