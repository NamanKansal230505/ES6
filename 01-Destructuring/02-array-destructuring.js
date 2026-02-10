// ============================================
//  TOPIC: Array Destructuring (ES6)
// ============================================
// Array destructuring lets us unpack values from
// arrays into individual variables.
// We can also use the rest operator (...) to
// collect remaining elements into a new array.
// ============================================

// --- Example: Array Destructuring with Rest Operator ---

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a=1, b=2, c=3, rest=[4,5,6,7,8,9,10]
let [a, b, c, ...rest] = number;

console.log(a);    // 1
console.log(b);    // 2
console.log(c);    // 3
console.log(rest); // [4, 5, 6, 7, 8, 9, 10]
