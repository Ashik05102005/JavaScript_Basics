function concatStrings(...arr){
    return arr.join(" ")
}
console.log(concatStrings("I","am","Ashik"));
function findMax(...numbers){
    console.log("max : "+Math.max(...numbers));
    console.log("min : "+Math.min(...numbers));
 
}
findMax(11,55,98,100,2,44,5)