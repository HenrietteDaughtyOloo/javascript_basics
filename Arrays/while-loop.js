let num = [10, 30, 3, 8, 7, 16, 45];
let nums = [100,200,300,400, 500];
let i = 0;
let sum = 0
let sum1=0
let multiply1=1
let multiply = 1
while(i<num.length){
    
    console.log(num[i]);
    sum1+=num[i]
    multiply*=num[i]
    i++
};
console.log({sum})
console.log({multiply})
/*
for(let i = 0; i<nums.length; i++){
  if(i===4) { console.log(nums[i]);
    sum += nums[i];
    multiply*=nums[i];
    i++;}

}
console.log(sum1);
console.log({multiply1});*/

for (let i = 0; i<nums.length;i++){
  if(i<nums.length){
    console.log(num[i]);
    multiply*=nums[i];
    i++;
  }
}
console.log(sum1);
console.log({multiply1});