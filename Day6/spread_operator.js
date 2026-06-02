// let str="ashik";
// console.log(...str)
// let arr=[2,66,33,7001,86565.55,48781,13,22]
// let minMax=(...array)=>{
//     let min=Math.min(...array);
//     let max=Math.max(...array);
//     return `In this array
// ${array}
// Smallest Number is : ${min}
// Largest  Number is : ${max}`
// }
// console.log(minMax(...arr));
let obj={name:"Ashik",age:20};
let a={...obj}
console.log(a)
let update={...obj,place:"ndm",nation:"India"}
console.log(update)