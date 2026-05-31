let add=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>a*b;
let div=(a,b)=>a/b;
let callback=(fun,a,b)=>{
    return fun(a,b);
}
console.log(callback(add,7,4))
console.log(callback(sub,7,4))
console.log(callback(mul,7,4))
console.log(callback(div,7,4))