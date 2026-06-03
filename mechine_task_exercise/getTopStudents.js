function getTopStudents(students, grade) {
    let res=students.filter(x=>x.grade===grade)
    console.log(res)
} 
getTopStudents([
  {name: "Alice", grade: "A"},
  {name: "Bob", grade: "B"},
  {name: "Charlie", grade: "A"}
], "A");
// ["Alice", "Charlie"]

