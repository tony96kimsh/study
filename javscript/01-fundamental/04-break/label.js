var dan = 2;

outside : while (dan < 10) {
    for(var num = 1; num < 10; num++) {
        if(dan == 6 && num == 1){
            break outside;
        }
        console.log(dan + " * " + num + " = " + dan * num);
    }
    dan++;
}