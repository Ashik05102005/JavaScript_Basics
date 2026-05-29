/*let arr=[5, 10, 15, 20, 25,30, 35, 40, 45, 50]
let double_arr=arr.map((value)=>value*2);
console.log(double_arr);*/
const students = [
  { id: 1, name: "Alice", age: 20, grade: "A" },
  { id: 2, name: "Bob", age: 21, grade: "B" },
  { id: 3, name: "Charlie", age: 19, grade: "A+" }
];

let names=students.map((student)=>{
    let student_name=student.name;
    let student_age=student.age;
    return {
            name:student_name ,
            age: student_age
        }
})
console.log (names);