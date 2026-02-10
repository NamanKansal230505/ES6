// function greet(name, greetMsg) {
//   console.log(`Hello, ${name}!`);
//   if (greetMsg === "byee") {
//     farewell();
//   }
// }

// function farewell() {
//   console.log("Goodbye!");
// }

// greet("John", "byee");


fucntion checkLogin(callback) {
    setTimeout(() => {
        console.log("Login successful");
        callback();
    }, 2000);
}

function verifyCart(callback) {
    setTimeout(() => {
        console.log("Cart verified");
        callback();
    }, 2000);
}

function proceedToPayment(callback) {
    setTimeout(() => {
        console.log("Payment successful");
        callback();
    }, 2000);
}
function placeOrder(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    }, 2000);
}

checkLogin(verifyCart(proceedToPayment(placeOrder)))