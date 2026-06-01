/*function main(a,b){
    let c=a+b;
    console.log(" no result ")
    function display(){
        console.log(c);
    }
    return display;
}
let res=main(5,6);
res()*/
function add(){
    let a=10;
    let b=15;
    function inner(){
        console.log(a+b);
    }
    return inner;
}
let c=add()
console.dir(c())