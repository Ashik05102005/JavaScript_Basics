let obj1={firstName:"Ashik",
          lastName:"PK"
}
let obj2={firstName:"Anu",
          lastName:"KC"
}
function getFullName(place,state){
    return `Full Name is : ${this.firstName} ${this.lastName} 
from : ${place} , ${state}`
}
console.log(getFullName.apply(obj1,["nadapuram","kerala"]))
console.log(getFullName.apply(obj2,["vanimel","kerala"]))