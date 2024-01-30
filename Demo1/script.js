//ES 6 Methods

//var

//let

//const


// Arrow Function
// const Square = (number) => number * number;


// const inputNumber = 4;
// const squareResult = Square(inputNumber);

// console.log(`The square of ${inputNumber} is: ${squareResult}`);



// // Template Literal
// const person = {
//     name: "Dion",
//     age: 18,
//     city: "Cebu"
// };


// const welcomeMessage = `Welcome, ${person.name}! Aged ${person.age} years old from ${person.city}. Please be comfortable in your stay here.`;
 
// console.log(welcomeMessage);

// const human = {
//     hair: "brown",
//     arm: 15,
//     height: 150
// };

// const characteristics = `${human.hair} ${human.arm}  ${human.height}`;



//Destructuring

// const person2 = {
//     firstName: 'Dion',
//     lastName: 'Eliot',
//     age: 18
// };
 
// const { firstName, lastName , age} = person2;
 
// console.log(`First Name: ${firstName}`);
// console.log(`Last Name: ${lastName}`);
// console.log(`Age: ${age}`);


//Default Parameters

// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
//     }

// greet(); // Hello, Guest!
// greet("Bob"); // Hello, Bob!


// //Spread Operator
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];
// const mergedArray = [...array1, ...array2];
// console.log(mergedArray);




// //Rest Operator
// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// const result = sum(1, 2, 3, 4);
// console.log(result); // Output: 10



//String methods
//split
const message = "Hello, World!";
const words = message.split("r")


console.log(words);


//includes


const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("apple");


console.log(containsWord);


//length
const sampleString = "welcome to Modern JS Features!";
const strLength = sampleString.length;
console.log(strLength);


/*
//Math methods
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
const roundupNumber = Math.round(3.5);
console.log(roundupNumber);


//nested math methods
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInteger = getRandomInt(1, 10);
console.log(randomInteger);
*/