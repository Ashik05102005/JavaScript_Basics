//slice() + join() + includes()
let array=[10, 20, 30, 40, 50]  ;
let sliced=array.slice(2);
console.log(`"${sliced.join("-")}" (includes "50" → ${sliced.includes(50)})`)