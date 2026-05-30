let min=(array)=>{
    let min=Math.min(...array);
    return min;
};
let max=(array)=>{
    let max=Math.max(...array);
    return max;
};
let num=[88,14,61,1,82,53,97,2,36,42];
let minimum=min(num);
let maximum=max(num)
console.log(`${num}
Largest number in this array is  ${maximum}
Smallest number in this array is ${minimum}`)
