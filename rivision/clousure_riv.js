function fun(){
    let a=10;
    let b=20
    function inner(){
        return a+b;
    }
    return inner;
}
let add=fun();
console.log(add())