

class Dog {
    constructor() {
        this.eyes = 2;
        this.nose = 1;
        this.mouth = 1;
        this.ears = 2;
        this.kinds = '개';
    }
    Bark() {
        console.log('멍멍');
    }
}

class Poodle extends Dog {
    constructor () {
        super();
        this.kinds = '푸들';
    }
    Bark() {
        console.log('왈왈');
    }
}

const dog = new Dog();
dog.Bark(); 

const pd = new Poodle();
pd.Bark();