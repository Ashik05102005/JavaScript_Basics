let groupByLength=(words)=>{
    let res={};
    words.forEach(x=>{
        let len=x.length;
        if(res[len]){
            res[len].push(x);
        }
        else{
            res[len]=[x];
        }
    })
    console.log(res)
}


groupByLength(["hi", "hello", "world", "js"]);
// {2: ["hi","js"], 5: ["hello","world"]}
