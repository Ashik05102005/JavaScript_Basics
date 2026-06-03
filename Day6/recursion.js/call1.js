// let obj={name:"AShik",
//         place:"vadakara"
// };

// function callFun(state,nation){
//     console.log(`name : ${this.name} 
// place : ${this.place}
// state : ${state}
// nation : ${nation}`)
// }
// let fun=callFun.bind(obj);
// fun("kerala","india")
function fun(){
    console.log(`name : ${this.name}   age : ${this.age}`)
}
let students = [
  { name: "Ashik", age: 22 },
  { name: "Meera", age: 21 },
  { name: "Rahul", age: 23 },
  { name: "Anjali", age: 20 },
  { name: "Vikram", age: 24 },
  { name: "Sara", age: 22 },
  { name: "Neha", age: 21 },
  { name: "Arjun", age: 25 },
  { name: "Priya", age: 23 },
  { name: "Kiran", age: 20 }
];
students.forEach((student)=>{
    let bind_fun=fun.bind(student);
    bind_fun();
});