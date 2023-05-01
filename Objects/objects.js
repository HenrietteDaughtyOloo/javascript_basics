//create an object
let person ={ 
    name:'Ann',
    age: 20,
    height:'5Ft',
    friend:{
        name:'Henry',
        age:25,
    }
}
let person1 = new Object();
console.log(person1);
person1.name='Edith'//Adding a new property
person1.age=40;
console.log(person1);

console.log(person.age);//log a value
person['age']=28;
console.log(person.age);//updating an existing property
console.log(person.friend.age);
delete person.age
console.log({person});

Object.freeze(person);
person.name='Henry'
console.log({person});

// function totalPrice(items){
//     items.filter(item=> item.price?.price)
//     let sum = items.reduce((a,b)=>)
// }

