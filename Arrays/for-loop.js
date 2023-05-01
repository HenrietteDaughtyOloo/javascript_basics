let num = [10, 30, 3, 8, 7, 16, 45];
for (let a = 0; a<num.length; a++){
    //console.log(a);
    console.log(num[a]);
}
//Quizconsole first three elements.
for (let i = 0; i<num.length; i++){
    //console.log({'num':num[i]}); -----you can console here so that the console is carried 
    //out./third item is done.

    if (i===2 ){ //you can increase index to 3.
        break
    }
    console.log({'num':num[i]});
}
for (let i = 0; i<num.length; i++){
    if (i===3 ){ //to skip the item at index to 3. use continue.
        continue
    }
    console.log({'continue':num[i]});
}