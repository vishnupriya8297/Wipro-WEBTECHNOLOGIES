//ARROW FUNCTIONS is a shorthand way to write functions in JavaScript.
// It provides a more concise syntax compared to traditional function expressions and is often used for writing small, single-line functions.
// Syntax: The basic syntax of an arrow function involves using the => (arrow) operator to separate the function parameters from the function body.
// Example 1: A simple arrow function that takes two parameters and returns their sum.
const add = (a, b) => a + b;
console.log(add(5, 3));

const showWelcome = () => console.log("Welcome");

const applyDiscount = price => price * 0.9;

const calculateTotal = (price, tax) => price + tax;

const summary = (price, discount) => ({ final: price - discount });

const createProduct = (id, name) => ({ id, name });

const prices = [100, 200, 300];
const discountedPrices = prices.map(p => p * 0.9);

function Session() {
  this.sec = 0;
  setInterval(() => {
    this.sec++;
    console.log(this.sec);
  }, 1000);
}

// Usage
showWelcome();
console.log(applyDiscount(100));
console.log(calculateTotal(100, 18));
console.log(summary(100, 10));
console.log(createProduct(1, "Laptop"));
console.log(discountedPrices);
new Session();
