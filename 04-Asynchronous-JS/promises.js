// ============================================
// Program 3: ES6 Promises
// ============================================

// (e) Promise that resolves after 2 seconds with a success message
// (f) Rejects if a condition fails
const isConditionMet = true; // Change to false to test rejection

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isConditionMet) {
            resolve("Operation completed successfully!");
        } else {
            reject("Condition failed: something went wrong.");
        }
    }, 2000);
});

// (g) Consume the Promise using then() and catch()
// (h) Display appropriate success or error messages
myPromise
    .then((successMsg) => {
        console.log("Success:", successMsg);
    })
    .catch((errorMsg) => {
        console.log("Error:", errorMsg);
    });
