let person={
    name:'Anne',
    age: 25,
    introduce: function(){
        console.log('Hello');
        console.log(`Hello my name is ${this.name}`);//does not work with arrow function
    }
}
person.introduce();
person.greet = function(){
    console.log('How you doing');
    console.log(`I am ${person.name}`);
   // console.log("I am ${person.name}");
}
person.greet();

