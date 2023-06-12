let person={
    name:'Anne',
    age: 25,
    introduce: function(){
        console.log('Hello');
        console.log(`Hello my name is ${this.name}`);//does not work with arrow function
    }
}

let person2 = {
    name:`Berry`, 
    age:32, 
    introduce: function(){
        console.log(`Hello ${this.name}`);
    }
}

person.introduce();
person2.introduce();


person.greet = function(){
    console.log('How you doing');
    console.log(`I am ${person.name}`);
   // console.log("I am ${person.name}");
}
person.greet();

person2.greet = function(){
    console.log(`Iam ${person.name}`);
}
person2.greet()

