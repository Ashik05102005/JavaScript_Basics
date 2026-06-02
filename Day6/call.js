let obj1={firstName:"Ashik",
          lastName:"PK"
}
let obj2={firstName:"Anu",
          lastName:"KC"
}
function getFullName(){
    return `Full Name is : ${this.firstName} ${this.lastName}`
}
console.log(getFullName.call(obj1))
console.log(getFullName.call(obj2))