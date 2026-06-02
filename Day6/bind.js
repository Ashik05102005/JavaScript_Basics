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
let new_fun=getFullName.bind(obj1,"Nadapuram","Kerala");
console.log(new_fun())