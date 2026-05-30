function sum(arr){
    let sum=arr.reduce((total,x)=>total+x ,0);
    return sum;
}
let array=[5,6,7,8,9];
console.log(sum(array))