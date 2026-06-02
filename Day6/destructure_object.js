let obj={firstName:"ashik",
        lastName:"Pk",
        age:18,
        job:"unemployed"
}
// let {firstName,lastName,age,job}=obj;
// console.log(firstName,lastName,age,job)
let destructure_obj=({firstName,lastName,age,job})=>{
    return `${firstName}  ${lastName} ${age} ${job}`
}
console.log(destructure_obj(obj))