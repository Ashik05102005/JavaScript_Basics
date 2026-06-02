let capitalizeFirstLetter=(string)=>{
    words=string.split(" ");
    let result=words.map((x)=>{
        let firstLetter=x[0];
        capitalized_first_letter=firstLetter.toUpperCase();
        x=x.replace(firstLetter,capitalized_first_letter);
        return x;
    })
   return result.join(" ");
}
console.log(capitalizeFirstLetter("hello world hi world"));
