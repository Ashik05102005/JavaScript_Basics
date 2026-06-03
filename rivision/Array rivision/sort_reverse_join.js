// sort_reverse_join.js
let arr=["Banana","Apple","Cherry"];
let res=arr.sort((a,b)=>a.localeCompare(b)).reverse().join("|");
console.log(res);
