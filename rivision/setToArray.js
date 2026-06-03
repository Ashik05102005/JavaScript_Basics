// let arr=[1,6,4,2,1,3,4,6,7,8,7];
// let newSet=new Set(arr);
// let array=[...newSet]
// console.log(array.sort((a,b)=>a-b))
let obj2={"name":"ashik",
    age:20
};
let obj1={"s":"jithu",
    "v":40
};
let obj={...obj1 , ...obj2}
console.log(obj)
