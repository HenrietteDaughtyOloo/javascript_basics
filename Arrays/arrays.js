const items = [2,8,true,"seed", [7,9]];
const items2 = [3, 5, false, "good",[4,3]]
const a = new Array(2,8,true,"seed");

console.log(a)
console.log(items)

console.log(items[3]);
console.log(items[4]);
console.log(items[5])
console.log(items[4][1]);

items.push(6);
console.log(items)
items.unshift("fruit");
console.log(items)
items.pop();
console.log(items)
items[5]="Hello"
console.log(items)
items.shift();
console.log(items)

//arguments and parameters
//call back functions =>

// Given an array of numbers, return an array x with each item multiplied by four
let num = [1,3,4,6,9,34];
let x = num.map(function(item){
    return item*4
})
console.log(x)
//let x2 = []
let x1 = [];
num.forEach(function(item){
x1.push(item * 4)})
//x2.unshift(item * 4 + 1)
console.log(x1);
//fixing it

//Merging arrays    1. concat
let mix = items.concat(num)
console.log(mix)

//Spread operator ...name
let b = [false,"deny", ...num,...num];
console.log(b)


//destructuring
let [z,w,y,...v]= [1,3,4, 7, 9, 78];
console.log({z});
console.log({w});
console.log({y});
console.log({v});

//read the 2D Array
items.push(56);
console.log(items);
items.unshift(54);
console.log(items);
items[0]="gone"
console.log(items);
items.shift()
console.log(items);