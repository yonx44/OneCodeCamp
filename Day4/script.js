//var global scope changeable variable
//let block scope changeable variable enclosed within {}

//const block scope unchangable variable 
//starts with letter, underscore, dollar sign

//var example; 
//const example = 2;

//{
//    let example2 = 0;
//}

//Data types

//Number
//let age = 25;

//String
//let name = "John";

//Boolean
//let isStudent = true;

//Undefined
//let city; 
//console.log(typeof city)

//Null
//let car = null;
//console.log(typeof car)

//Object types

//Object - {}
//Array - []
//Date - Represents a specific momment in time
//RegEx - patern matching within strings
//Function - reusable blocks of code

//Operators
//Arithmetic - +, -, *, /
//Logical - &&, ||, !
// Unary - +, -, ++, --
//Assignment - =, +=, *=, /= %=


//JS Expressions

//Arithmetic 
//
//

//let x = 5;
//let y = 2;

//let sum = x + y;
//console.log(sum);

//String Expressions
//console.log("Hello "+"World");

//Logical Expressions
//var x = true;
//var y = false;

//console.log(x && y);

//Assignment Expressions
//x += y
//x = x+ y

//let x = 10;
//let y = 5;

//x += y;
//console.log(x);

//Function Expression
//function myFunction(num1, num2) {
//    console.log(num1 + num2);
//}

//yFunction(30, 10)

//Loops
//if statement

/* 
let section = "benevolence";
if(section == "benevolence"){
    console.log("You are correct!");
}
else{
    console.log("You are wrong!");
}

let temperature = 25;

if(temperature < 0) {
    console.log("It's freezing");
}
else if(temperature >= 0 && temperature){
    console.log("It's cool outside");
}
else {
    console.log("It's a warm day");
}
*/



//Switch Statements
//let day = "Monday";

//switch (day) {
//    case "Monday":
//        console.log("It's the start of the week");
//        break;
//    case "Friday":
//        console.log("It's the end of the week");
//        break;
//    default:
//        console.log("It's a regular day");
//}

//Loops
//For Loop

/*
for (let i = 2; i <= 1000; i += 2){
    console.log(i);
}

for (let i = 8; i <= 1000; i += 8) {
    console.log(i);
  }

for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      console.log(i + " is divisible 3.");
    } else {
      console.log(i + " is not divisible by 3.");
    }
}
*/

//While
//let count = 1;
//while (count <= 5) {
//    console.log("Count: ", count);
//    count++;
//}

//Do-While
//let i = 1;

//do {
//console.log(i);
//i++;
//} while (i <= 5);

/*Activity

1) Create a program that prints all the even numbers from 1 to 1000. Use the standard for loop for this exercise and don't create any arrays. 

2) Create a program that prints the arithmetic progression starting at 8 and going up to 1,000. 

3) Create a program that counts from 1 to 1000. As it loops thorugh each number, have your program generate the number and a message saying whether it's multiple of 3 or not. 

*/


//Arrays - access information using location

//Arithmetic Progression Sum
var numbers1 = [2, 5, 8, 11, 14];
var commonDifference = numbers1[1] - numbers1[0];
var numberOfTerms = numbers1.length;
var sum = (numberOfTerms / 2) * (2 * numbers1[0] + (numberOfTerms - 1) * commonDifference);
console.log("Sum of arithmetic progression: " + sum);

//Mean
const average = arr => arr.reduce ( (p, c ) => p + c, 0 ) / arr.length;
const mean = average ([13,143,88,65,120]); 
console.log(mean);


//Array Even
let numbers2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        console.log(numbers2[i]);
    }
}


//Objects - access information using assigned name
//var teacher = {name: "Amanda", city: "Las Pinas", gender: "female"};
//console.log(teacher.name);

//teacher.name = "Dion";

//console.log(teacher.name);

/*
1) Create a program that prints the arithemetic series of the sum of the sequence 
of values in the array "numbers". Your "numbers" array should contain the following sequence: 2, 5, 8, 11, 14.

let numbers = [2, 5, 8, 11, 14];

2) Create a program that prints the mean of the values in the array called "numbers". 
Array "numbers" should have the following values: 13, 143, 88, 65, 120.

let number = [13, 143, 88, 65, 120];

3. Create an array that inclusively contains all even numbers between 0 to 100.

4. OPTIONAL: Guess the Secret Number Game


*/