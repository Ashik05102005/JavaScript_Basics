let array=[1,2,2,5,4,1,3,4]
array=array.sort((a,b)=>a-b)
let Myset=new Set(array);
console.log(array);
console.log(Myset);
console.log(Myset.add(6))
console.log(Myset.delete(2))
console.log(Myset)
console.log(Myset.has(7))
console.log(Myset.size)