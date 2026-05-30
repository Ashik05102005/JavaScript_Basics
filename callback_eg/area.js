let sqr_area=(a)=>a*a;
let circle_area=(r)=>Math.PI*(r*r);
let callback=(ar,callback)=>{
    return callback(ar)
}
console.log(callback(5,sqr_area));
console.log(callback(5,circle_area));