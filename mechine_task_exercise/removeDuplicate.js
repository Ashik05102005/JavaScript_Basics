let removeDuplicateChars=(str)=>{
    let charArray=str.split("")
    let removed=new Set(charArray);
    return `removed duplicate characters from ${str} => ${[...removed].join("")}`;   
}
console.log(removeDuplicateChars("programming")); // "progamin"
console.log(removeDuplicateChars("hello")); // "helo"
