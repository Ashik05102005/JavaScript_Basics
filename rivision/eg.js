// const person1 = {
//   name: "Karthik",
//   greet() {
//     console.log(this.name);
//   }
// };
// const person2 = {
//   name: "Alex",
//   greet: person1.greet
// };
// person2.greet();
function sum(n) {
  if (n === 0) {
    console.log("return 0")
    return n; // base case
  }
  return n + sum(n - 1); // recursive call
}

console.log(sum(5));