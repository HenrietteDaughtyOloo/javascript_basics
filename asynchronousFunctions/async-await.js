let userDetails=true;

let promise = new Promise(function(resolve, reject){
    if (userDetails) {
        setTimeout(() => {resolve("User details available")},5000);
            
        }       
    else {
        setTimeout(()=>{reject("No user details")},5000);
    }
});
let add = ()=>{
    console.log(20+30);
}
add();

const getUserDetails = async ()=>{
    let response = await promise;
    console.log({response});
    // response.then(()=>console.log('user details found'))
    // .catch(()=> console.log("No details found");)
};
getUserDetails();