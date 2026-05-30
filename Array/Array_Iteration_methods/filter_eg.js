let ages=[15,22,18,32,25,4,16]
let adults=ages.filter(age=>age>=18 ?  true :  false);
console.log(adults);
let minor=ages.filter(age=>age<18 ?  true :  false);
console.log(minor);