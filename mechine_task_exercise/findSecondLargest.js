let findSecondLargest=(array)=>{
    var checkSame=array.every((x)=>x===array[0])
    if(checkSame){
        return `the array is same  => ${array}`;
    }
    else{
        let sorted=array.sort((a,b)=>a-b)
        return `The seccond largest element in the array => ${sorted[array.length-2]}`
    }
}
console.log(findSecondLargest([10, 20, 30, 40])); // 30
console.log(findSecondLargest([5, 5, 5])); // undefined
