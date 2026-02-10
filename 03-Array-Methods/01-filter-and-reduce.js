// ============================================
//  TOPIC: Array Methods - filter() & reduce() (ES6)
// ============================================
// filter() - creates a new array with elements that
//            pass a condition (returns true/false)
// reduce() - reduces an array to a single value by
//            applying a function on each element
// ============================================

// --- Problem: Sum of Squares of Even Numbers ---
// Steps:
//   1. filter() to get only even numbers
//   2. reduce() to sum their squares

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfSquaresOfEvenNumbers(numbers) {
  return numbers
    .filter(number => number % 2 === 0)        // [2, 4, 6, 8, 10]
    .reduce((sum, number) => sum + number ** 2, 0); // 4+16+36+64+100 = 220
}

console.log(sumOfSquaresOfEvenNumbers(numbers)); // 220
