let add = ()=>{
    let num = 20;
    console.log({num});
    let subtract = ()=>{
        return 30 - num;
    }
    return subtract;
};
let nums = add();
console.log(nums);
