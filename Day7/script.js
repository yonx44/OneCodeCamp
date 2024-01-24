//ECMAScript-ES6

//Block scope variables

/*
function example() {
    var x = 1;
    console.log(x);
}

//template literal
let name = "Amanda"
let age = "18";
console.log("My name is " +name+ " and I am  " +age+ " years old.");

console.log(`My name is ${name} and I am ${age} years old`);

//let message = "This is"
//                a multi-line
//                message"

let message1 = "This is";
let message2 = "a multi-line";
let message3 = "message";

console.log(message1);
console.log(message2);
console.log(message3);

//Back ticks read spaces
let message = `This is 
a multi-line
message`;

console.log(message);

//Arrow function
//function square(num) {
//    return num * num;
//}

console.log(square(5));



//let square = (num1, num2) => num1 * num2;
//console.log(square(5, 2));

//this
//Lexical scope

//const person = {
//    name: "Dion",
//    greetRegular: function() {
//        console.log(`Hello ${this.name} !`);
//    },
//    greetArrow: () => {
//        console.log(`Hello ${this.name} !`);
//    }
//};

//person.greetRegular();
//person.greetArrow

//Destructuring Assignment:
const number = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = number;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const person = {
    name:"LJ",
    age: 30,
    country: "PH"
}
const {name, age ,country} = person;

console.log(name);
console.log(age);
console.log(country);

//Spread and Rest Operators
function sum(x, y ,z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...number));

//rest operator
function myFunction(firstArg, ...restOfArgs) {
    console.log(firstArg);
    console.log(restOfArgs);
}
myFunction("one", "two", "three", "four");



const grades = {
    math: 94,
    english: 81,
    Science: 72,
    pe: 99
}

const grades2 = {
    ...grades
}

console.log(grades2);

*/

/*
//4-1 Arrow Function
const Square = (number) => number * number;

const inputNumber = 5;
const squareResult = Square(inputNumber);

console.log(`The square of ${inputNumber} is: ${squareResult}`);


//4-2 Template Literal
const person = {
    name: "Dion",
    age: 18,
    city: "Cebu"
};

const welcomeMessage = `Welcome, ${person.name}! Aged ${person.age} years old from ${person.city}. Please be comfortable in your stay here.`;
  
console.log(welcomeMessage);


//4-3 Destructuring

const person2 = {
    firstName: 'Dion',
    lastName: 'Eliot',
    age: 18
};
  
const { firstName, lastName , age} = person2;
  
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);


//4-4 Spread Operator
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const mergedArray = [...array1, ...array2];

console.log(mergedArray);


//4-5

const RectangleArea = (length = 1, width = 1) => {
    return length * width;
};
const defaultArea = RectangleArea();
console.log(`Area with default parameters: ${defaultArea}`); 

const customArea = RectangleArea(8, 5);
console.log(`Area with custom parameters: ${customArea}`);
*/

//String methods
//split

const message = "Hello, World!";
const words = message.split("h")

console.log(words);

//includes

const sentence = "The quick brown fox over the lazy dog.";
const containsWord = sentence.includes("apple");

console.log(containsWord);

//length
const sampleString = "welcome to Modern JS Features!";
const strLength = sampleString.length;
console.log(strLength);

//math methods
//max 

const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber); 

//min

const minNumber = Math.min(10, 5, 20);
console.log(minNumber); 

//random

const randomValue = Math.random();
console.log(randomValue); 

//floor
const floorNumber = Math.floor(3.7);
console.log(floorNumber);

//ceiling
const ceilingNumber = Math.ceil(3.7);
console.log(ceilingNumber);

//round down
const rounddownNumber = Math.round(3.4);
console.log(rounddownNumber);

//round up
const roundupNumber = Math.round(3.7);
console.log(roundupNumber);

//nested math methods
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInteger = getRandomInt(1, 10);
console.log(randomInteger);

