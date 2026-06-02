let countTrue=(list)=>{
    let count=0
    list.forEach((x)=>{
        if(x===true){
            count++;
        }
    })
    return count;
}
console.log(countTrue([true, false, false, true, false,true]));