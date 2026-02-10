// ============================================
//  TOPIC: Default Values in Destructuring (ES6)
// ============================================
// When destructuring, we can assign default values
// that are used if the extracted value is undefined.
// NOTE: Default values only kick in for `undefined`,
//       NOT for `null`, `0`, or other falsy values.
// ============================================

// --- Example 1: Array - Partial Data ---
// Only one value exists, so `science` gets its default

let marks = [80];
let [math = 0, science = 0] = marks;

console.log(math);    // 80  (from array)
console.log(science); // 0   (default, since index 1 is undefined)


// --- Example 2: Array - Empty Data ---
// No values exist, both get defaults

let data = [];
let [x = 10, y = 20] = data;

console.log(x); // 10 (default)
console.log(y); // 20 (default)


// --- Example 3: Array - 0 and null are NOT undefined ---
// Default values only apply when value is `undefined`
// 0 and null are valid values, so defaults are NOT used

let data2 = [0, null];
let [p = 10, q = 20] = data2;

console.log(p); // 0    (NOT 10, because 0 is not undefined)
console.log(q); // null  (NOT 20, because null is not undefined)


// --- Example 4: Object - Default Values ---

let product = {
  name: "Laptop"
};

let { name, price = 0 } = product;

console.log(name);  // "Laptop" (from object)
console.log(price); // 0        (default, since price is undefined)
