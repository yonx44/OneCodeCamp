/*
Defining function

function greet() {
    console.log("Hello, welcome to the world  of functions.");
}

//calling the function
greet();

//function declaration
function squareDeclaration(num) {
    return num * num;
}

//function expression
const squareExpression = function(num) {
    return num * num;
}

//calling the functions
console.log("Square (Function Declaration): ",squareDeclaration(5));
console.log("Square (Function Expression): ", squareExpression(5));

//Function hoisting

function sayHello(name) {
    console.log("Hello, "+name);
}

sayHello("Harold");

//Anonymous Functions
var test = function() {
    console.log("Hello, world!");
}

test();

//function with return value
function sum(a, b) {
    return a + b
}

console.log(sum(3, 5));

let result = sum(5, 3);
console.log(result);

//Callbacks

function calculate(num1, num2, operation) {
    return operation(num1, num2); 
}

//Callback function
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

let result1 = calculate(5, 3, add);
let result2 = calculate(5, 3, substract);

console.log("Result (addition): ", result1);
console.log("Result (subtratction): ", result2);
*/

//Activity 1

//Step 1
function greet() {
    console.log("Hello, welcome to the world  of functions.");
}

greet();

//Step 3
function calculate(num1, num2, operation) {
    return operation(num1, num2); 
}

function add(a, b) {
    return a + b;
}

let result = calculate(5, 3, add);

console.log("Sum: ", result);

//Step 6
function multiply(a, b) {
    return a * b;
}

let result2 = calculate(4, 2, multiply);

console.log("Product: ", result2);

//Step 9
const isEven = function(num3) {
    return num3 % 2 === 0;
}
const even = isEven(6)

console.log(even);

//Step 12
const square = function(num4) {
    return num4 * num4;
}
const squaredValue = square(3)

console.log(squaredValue);

//Step 15
const fullName = function(firstName, lastName) {
    return `${firstName} ${lastName}`;
};

const name = fullName('John', 'Doe');

console.log(name);

//Step 18
const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
const capitalizedString = capitalize('javascript');

console.log(capitalizedString);

