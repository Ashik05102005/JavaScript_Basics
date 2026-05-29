let students=[
    {name:"ashik",age:21},
    {name:"anu",age:21},
    {name:"annu",age:5}
]
students.sort((a,b)=>a.name.localeCompare(b.name));
console.log(students);
students.sort((a,b)=>a.age-b.age);
console.log(students);




