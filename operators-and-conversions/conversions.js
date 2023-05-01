let a = 10;
let b = "10";
//implicit coercion

let c = b+a ; // adding number to a string
console.log({c});
console.log("Turning string to number:", b*1)
let d = b*1;
console.log(d+a);

console.log(d+a);
let e = b+a;
console.log({e});

//explicit - uses inbuilt.js methods
console.log({"number":Number(b)})
console.log({b})

console.log({"string":String(a)})
console.log({"array":Array(b)})