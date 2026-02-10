// ============================================
//  TOPIC: Rest Parameters (ES6)
// ============================================
// The rest parameter (...) allows a function to
// accept an indefinite number of arguments as an array.
// It collects all remaining arguments into one array.
// ============================================

// --- Example 1: Fixed Parameters ---

function addFixed(a, b, c) {
  return a + b + c;
}

console.log(addFixed(1, 2, 3)); // 6


// --- Example 2: Rest Parameters (accept any number of args) ---

function add(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55


// --- Example 3: Mixing Regular + Rest Parameters ---
// First 3 args go to a, b, c. The rest go into the array.

function addMixed(a, b, c, ...rest) {
  return a + b + c + rest.reduce((sum, number) => sum + number, 0);
}

console.log(addMixed(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
