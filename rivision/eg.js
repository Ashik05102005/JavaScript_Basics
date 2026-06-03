const person1 = {
  name: "Karthik",
  greet() {
    console.log(this.name);
  }
};
const person2 = {
  name: "Alex",
  greet: person1.greet
};
person2.greet();