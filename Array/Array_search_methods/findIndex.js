let arr=[1,3,5,4];
let even=arr.findIndex(function(value){
    console.log(value);
    return value%2===0});
console.log("The first even number's index is "+even)
console.log(`arr[${even}] is ${arr[even]}`)