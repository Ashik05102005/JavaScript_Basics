let reverseWords=(string)=>{
        let words=string.split(" ");
        let rev_words=words.map((x)=>{
        let letters=x.split("");
        let rev_letters=letters.reverse();
        return rev_letters.join("");
    })
    return rev_words.join(" ")
}
console.log(reverseWords("Hello World") );