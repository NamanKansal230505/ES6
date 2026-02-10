// ============================================
//  TOPIC: Asynchronous JavaScript - setTimeout
// ============================================
// JavaScript is single-threaded but can handle
// async operations using the Event Loop.
//
// setTimeout(callback, delay) schedules a function
// to run AFTER the specified delay (in ms).
// It does NOT block the rest of the code.
//
// Execution Order:
//   1. Synchronous code runs first (top to bottom)
//   2. setTimeout callback waits in the task queue
//   3. After the delay AND all sync code is done,
//      the callback executes
// ============================================

// --- Example 1: Synchronous (Blocking) ---
// This loop blocks execution until it finishes

// console.log("Start of the program");
// function calculation() {
//   for (let i = 0; i < 1e8; i++) {
//     // heavy computation - blocks the thread
//   }
// }
// calculation();
// console.log("End of the program");
// Output: "Start" -> (waits) -> "End"


// --- Example 2: Asynchronous (Non-Blocking) ---
// setTimeout does NOT block - code continues immediately

console.log("Start of the program");

setTimeout(() => {
  console.log("Inside the setTimeout"); // runs after 2 seconds
}, 2000);

console.log("End of the program");

// Output Order:
//   1. "Start of the program"
//   2. "End of the program"       (runs immediately, doesn't wait)
//   3. "Inside the setTimeout"    (runs after 2 second delay)
