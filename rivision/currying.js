// // currying.js
// function fun(a,b,c)
// {
   // console.log(a+b+c);
// }
//fun(a,b,c)
//        |   currying
//        V
function fun(a){
    console.log(a);
    return function(b){
        console.log(b);
        return function(c){
            console.log(c);
            console.log(a+b+c);

        }
    }
}
let fun1=fun(5);
let fun2=fun1(5);
let fun3=fun2(7);
