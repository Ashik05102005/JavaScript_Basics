function getStudentsWithoutGradeA(students){
    let result=students.filter(x=> x.grade!=="A")
    let new_arr=result.map(x=>x.name)
    return new_arr;
}

let students=[ 
{ name: "Alice", grade: "A" },  
{ name: "Bob", grade: "B" },  
{ name: "Charlie", grade: "D" },  
{ name: "David", grade: "C" } 
];
let res=getStudentsWithoutGradeA(students);
console.log(res)


