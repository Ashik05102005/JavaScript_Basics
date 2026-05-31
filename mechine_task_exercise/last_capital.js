let capitalizeWords=(sentence)=>{
    let words=sentence.split(" ");
    let capitalized=words.map((word)=>{
        let letters=word.split("");
        letters[letters.length-1]=letters[letters.length-1].toUpperCase();
        result=letters.join("")
        return result;
    })
    capitalized_string=capitalized.join(" ")
    return capitalized_string;
}
let res=capitalizeWords("javaScript is awesome" );
console.log(res)