class Person {
    constructor(name,age,height){
    this.name = name;
    this.age = age;
    this.height= height
}
greet(){
    console.log("Hello");
}

}

let person = new Person('Hannah',30,'5ft 8inch')
console.log(person);
person.greet();

class Child extends Person{
    constructor(name, age, height, brains){
        super(name, age, height);
        this.brains;
    }
}
let firstChild = new Child('Jane', 2,'2ft','smart')
console.log({firstChild});

class Sister extends Person{
    constructor(name, age, height, brains){
        super(name, age, height);
        this.brains= brains
        this.height = '7ft'
    }
}
let sister = new Sister('Amanda',20,'5ft','average')
console.log({sister});