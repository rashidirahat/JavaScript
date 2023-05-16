class Parent{
    constructor(name){
        this.name = name;
    }
    myName(){
        console.log(`My name is ${this.name}`)
    }
}

class Child extends Parent{
    myName(){
        console.log(`This name is from child ${this.name}`)
    }
}

const ans = new Child("Salim");

ans.myName();