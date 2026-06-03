let groupWords=(array)=>{
    let count={}
    array.forEach((word)=>{
        let len=word.length;
        if(count[len]){
            count[len]=count[len]+","+word;
        }
        else{
            console.log(len,word)
            count[len]=word;
        }
    })
    console.log(count)
}
groupWords(["hi","cat","hello","ashik","he"])