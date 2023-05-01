let trial = "Hello";
trial = 'Hello'
trial = `Hello`

let greeting = "there"
let mix = trial +" " + greeting;
console.log(mix);
mix = `${trial} ${greeting}`;
console.log(mix);
console.log(trial[1]);

greeting[0] = "T"
console.log(greeting); //strings are immutable/ primitive so cant be changed

