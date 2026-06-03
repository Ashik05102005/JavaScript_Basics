let str="Hello world from JavaScript";
let words=str.split(" ");
let last_two=words.slice(words.length-2,words.length)
let upperCase=last_two.map(x=>x.toUpperCase()).join(" ");
console.log("PREFIX_"+upperCase);
