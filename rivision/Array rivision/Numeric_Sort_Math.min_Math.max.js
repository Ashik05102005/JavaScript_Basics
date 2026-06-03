// Numeric_Sort_Math.min_Math.max.js
let numbers=[100, 25, 3] ;
let sorted=numbers.sort((a,b)=>a-b);
console.log(`sorted → ${numbers}, min → ${Math.min(...numbers)}, max → ${Math.max(...numbers)}`)