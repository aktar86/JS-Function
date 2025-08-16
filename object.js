const person = {firstName: "John",lastName: "Doe", id: 10, age: 50, eyeColor: "blue"};
let x = "eyeColor";
let y = "id";
const age = person["age"];

const eyeColr = person[x]
const fname = person.firstName + " " + person["lastName"] + " " + person[y]; 
console.log(age, eyeColr, fname)
person.age = 70;
person.Link = "hellydotcom";
console.log(person, age, eyeColr, fname)