let success = false;

let promise = new Promise((resolve, reject) => {
    if (success) {
        resolve("I have every thing");
    }
    else{
        reject("I am still poor");
    }
}).then(()=>{console.log("Its a dream come true");})
.catch(()=>{console.log("I will get my own money");})
.finally(()=>{console.log("I will be happy");});
console.log({promise});