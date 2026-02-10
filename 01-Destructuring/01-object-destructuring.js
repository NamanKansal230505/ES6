// ============================================
//  TOPIC: Object Destructuring (ES6)
// ============================================
// Destructuring allows us to extract values from
// objects and assign them to variables in one step.
// Instead of accessing each property with dot notation,
// we can unpack them directly.
// ============================================

// --- Example 1: Basic Object Destructuring ---

const user = {
  firstname: "Akash",
  lastname: "Goel",
  address: {
    city: "Delhi",
    state: "Delhi",
    country: "India"
  }
};

// Old way (without destructuring):
// let a = user.firstname;
// console.log(a);
// let b = user.address.city;
// console.log(b);

// New way (with destructuring - including nested objects):
let { firstname, lastname, address: { city, state, country } } = user;

console.log(firstname); // "Akash"
console.log(lastname);  // "Goel"
console.log(city);      // "Delhi"
console.log(state);     // "Delhi"
console.log(country);   // "India"


// --- Example 2: Passing Object to a Function ---

const student = {
  name: "Akash",
  age: 20,
  city: "Delhi",
  country: "India"
};

function showStudent(student) {
  console.log(student.name);
  console.log(student.age);
  console.log(student.city);
  console.log(student.country);
}

showStudent(student);
