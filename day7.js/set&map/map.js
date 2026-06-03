let Mymap=new Map([
    ["name","Ashik"],
    ["age",20],
    ["city","kondotti"]
]);
console.log(Mymap)
console.log(Mymap.set(["place","nadapuram"],["state","kerala"]))
console.log(Mymap.delete())
console.log(Mymap)
console.log(Mymap.has('age'))
console.log(Mymap.size);
Mymap.clear();
console.log(Mymap)
