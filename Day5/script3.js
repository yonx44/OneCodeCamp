
//Exercise 1

function greet(name) {

console.log(`Hello, ${name}!`);
}

greet("Dion"); 

//Exercise 2

const add = function (a, b) {
    return a + b;
};

console.log(add(5, 7)); 

//Exercise 3

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(3)); 
console.log(isEven(4));

//Exercise 4

var globalVar = "Global variable";

function varScope() {
   
var globalVar = "Local variable";
   
console.log("Inside function:", globalVar);
}

console.log("Outside function:", globalVar);

varScope();

//Exercise 5

hoistedFunction(); 

function hoistedFunction() {

console.log("This function was hoisted.");

}

//Exercise 6

function calculate(a, b, callback) {
    return callback(a, b);
    }

const add2 = (a, b) => a + b;
const subtract2 = (a, b) => a - b;
const multiply2 = (a, b) => a * b;
const divide2 = (a, b) => a / b;

console.log(calculate(5, 3, add2)); 
console.log(calculate(5, 3, subtract2)); 
console.log(calculate(5, 3, multiply2));
console.log(calculate(6, 3, divide2)); 

//Exercise 7

function counter() {
let count = 0;
    
return function () {
count++;
console.log(count);
    };
    }
const counter1 = counter();
const counter2 = counter();

counter1(); 
counter1(); 
counter2(); 

//Exercise 8

function applyFunction(func, array) {
const result = [];
    for (let item of array) {
    result.push(func(item));
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;
console.log(applyFunction(square, numbers)); 

//Exercise 9

function getUserData(callback) {}
    