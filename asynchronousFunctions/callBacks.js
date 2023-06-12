function add(num,callback){
    console.log(num);
    console.log({callback});
    callback(num);
}
function nums (num){
    console.log("Hello");
    console.log(num+30);
};
//add(12,"hey")-> brings an error coz expects a function not a string 
add(12,nums)