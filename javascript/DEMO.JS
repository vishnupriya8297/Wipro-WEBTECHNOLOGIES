//Java script is a programming language used to create dynamic and interactive effects within web browsers. It is a versatile language that can be used for both client-side and server-side development. JavaScript allows developers to implement complex features on web pages, such as interactive forms, animations, and real-time updates. It is an essential technology of the World Wide Web, alongside HTML and CSS.
//It is a high-level, interpreted language that supports multiple programming paradigms, including procedural, object-oriented, and functional programming. JavaScript is widely used for web development, but it is also used in other contexts, such as mobile app development, game development, and server-side programming with Node.js.
//It is a dynamically typed language, meaning that variable types are determined at runtime rather than at compile-time. This allows for greater flexibility in coding but can also lead to potential runtime errors if not managed carefully.
//JAVA SCRIPT is an event-driven language, which means that it relies heavily on events to trigger actions. This makes it well-suited for creating interactive web applications that respond to user input and other events in real-time.
//JS is runs on search engines like Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. Each browser has its own JavaScript engine that interprets and executes the code.
//ex: chrome-V8, firefox-spidermonkey, safari-javascriptcore, edge-chakra



//we use console.log() to print something on the console
console.log("Hello, World!");


//DATA TYPES IN JAVASCRIPT
//DATA TYPES IS USED TO CLASSIFY DIFFERENT TYPES OF DATA THAT CAN BE STORED AND MANIPULATED IN A PROGRAM.
//1. NUMBER: Represents numeric values, both integers and floating-point numbers.
//2. STRING: Represents sequences of characters enclosed in single or double quotes.
//3. BOOLEAN: Represents logical values, either true or false.
//4. OBJECT: Represents complex data structures that can store multiple values and properties.
//5. UNDEFINED: Represents a variable that has been declared but has not been assigned a value.
//6. NULL: Represents the intentional absence of any object value.
//7. SYMBOL: Represents a unique and immutable value often used as object property keys.
//8. BIGINT: Represents integers with arbitrary precision, allowing for the representation of very large numbers.
//EXAMPLES:
let num = 42;   
let str = "Hello, JavaScript!";
let bool = true;
let obj = { name: "Alice", age: 30 };
let undef;
let nul = null;
let sym = Symbol("unique");
let bigIntNum = 9007199254740991n; // BigInt literal




//VARIABLES IN JAVASCRIPT
//Variables are used to store data values that can be referenced and manipulated throughout a program. In JavaScript, variables can be declared using three keywords: var, let, and const.
//1. var: The var keyword is function-scoped and can be redeclared and updated within its scope. However, it is generally recommended to avoid using var due to its scoping issues.
//2. let: The let keyword is block-scoped and can be updated but not redeclared within its scope. It is the preferred way to declare variables that may change value.
//3. const: The const keyword is also block-scoped but cannot be updated or redeclared. It is used to declare variables that should remain constant throughout the program.
// VARIABLE SCOPE IN JAVASCRIPT
//1. Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
//2. Local Scope: Variables declared within a function have local scope and can only be accessed within that function.
//3. Block Scope: Variables declared with let or const within a block (enclosed by curly braces {}) have block scope and can only be accessed within that block.
