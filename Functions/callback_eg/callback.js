function greet(uname){
    console.log(`welcome ${uname}`);
}
function toCallBack(fun,name){
    fun(name);
}
toCallBack(greet,"Ashik")
