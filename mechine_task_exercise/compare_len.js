let findLongestWord=(sentence)=>{
    let large="";
    words=sentence.split(" ")
    words.forEach((x)=>{
        if(large.length<x.length){
            large=x;
            
        }
        
    })
    return large;
}
let largest=findLongestWord("One two three four");
console.log(largest);