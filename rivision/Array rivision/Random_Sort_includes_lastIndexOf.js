// Random_Sort_includes_lastIndexOf.js
let array=[1,2,3,4,3] ;
let radom_sorted=array.sort(()=>Math.random()-0.5);
console.log(`${radom_sorted} (includes "3" → ${radom_sorted.includes(3)}, lastIndexOf "3" → ${radom_sorted.lastIndexOf(3)})`)