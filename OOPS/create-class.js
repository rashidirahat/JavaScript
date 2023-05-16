class Home {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    entry(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

const bell = new Home("Rahat", 28);
bell.entry()