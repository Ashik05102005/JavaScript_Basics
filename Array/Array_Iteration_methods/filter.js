let arr=[],k=0;
for(let i=1;i<=50;i++){
    arr[k]=i;
    k++;
}
console.log(arr)
let filtered_array=arr.filter((value)=>value%5===0);
console.log(filtered_array)