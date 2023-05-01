a = 20; //A Global variable
function add(b){
    console.log(a+b);
    console.log(a);
    let c = 30 //local variable, not confined by boundaries
    console.log(a+b+c);
    a=60

}
add(20);
//console.log(c); // undefined
console.log("a2",a);

function multiply(c){
    console.log(a*c);
}
multiply(3)
console.log(a);// it was changed

function greet(){
    var hello = "Hi"
    function talk(){
        let greeting = "hey there"
        console.log(`${hello} ${greeting}`);
    }
    talk()
}
greet()
