// search + match
let str="Regex123Test456";
let search=str.search(/\d+/)
let match=str.match(/\d+/g)
console.log(search+"\n"+ match)