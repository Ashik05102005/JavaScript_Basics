// concat_
// sort_find.js
let arr=[];
arr=arr.concat([10,20,60],[30,40,70])
console.log(`${arr.sort((a,b)=>a-b)} (find → ${arr.sort((a,b)=>a-b).find((num)=>num>50)})`)
