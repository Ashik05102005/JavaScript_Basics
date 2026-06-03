// delete_find_findIndex.js
let arr=[2, 8, 12, 20]
let greater=arr.find(num=>num>10)
let index=arr.findIndex(num=>num>10);
delete arr[index];
console.log(greater)
console.log(arr);