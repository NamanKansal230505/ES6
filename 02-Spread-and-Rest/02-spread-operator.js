// ============================================
//  TOPIC: Spread Operator (ES6)
// ============================================
// The spread operator (...) expands an iterable
// (array/object) into individual elements.
// It can be used to:
//   - Merge arrays
//   - Pass array elements as function arguments
//   - Copy and update objects
// ============================================

// --- Example 1: Merging Arrays ---

const csStudent = ["akash", "ashish", "abhi", "akash", "ashish", "abhi"];
const itStudent = ["Amit", "Raj", "Sanjay", "Raj", "Sanjay", "Raj"];

const allStudents = [...csStudent, ...itStudent];
console.log(allStudents);
// ["akash", "ashish", "abhi", "akash", "ashish", "abhi", "Amit", "Raj", "Sanjay", "Raj", "Sanjay", "Raj"]


// --- Example 2: Passing Array Elements to a Function ---

const sum = (...numbers) => {
  return numbers.reduce((sum, number) => sum + number, 0);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(...numbers)); // 55
// ...numbers spreads the array into individual arguments


// --- Example 3: Copy and Update an Object ---
// Creates a new object with all properties of the original,
// but overrides specific values (city changed to "Mumbai")

const user = {
  name: "Akash",
  age: 20,
  city: "Delhi",
  country: "India"
};

const updatedUser = {
  ...user,
  city: "Mumbai",   // overrides "Delhi"
  country: "India"
};

console.log(updatedUser);
// { name: "Akash", age: 20, city: "Mumbai", country: "India" }
