let filterByLength=(array,min,max)=>{
    let res=array.filter((x)=>x.length>min&&x.length<max);
    return res 
}
console.log(filterByLength(["a", "ab", "abc", "abcd", "abcde"], 1, 5)); 