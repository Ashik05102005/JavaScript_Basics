let sqrt=function(array){
    let sqrt_arr=array.map((x)=>Math.sqrt(x))
    return sqrt_arr
}
let arr=[4,9,16,25,36,49,64,81,100]
let res=sqrt(arr);
console.log(arr)
console.log(res)