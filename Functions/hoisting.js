//calling a function/variable before you declare it
//works with normal function writinng
//only allowed when using a var and const expression not let
//used with older version of js
console.log(a);
var a = 20
console.log({a});

function greet(){
    console.log("Hello")
}
greet()