//Activity 2

//Step 1
function isEven(number) {
    return number % 2 === 0;
}
for (let i = 0; i <= 10; i++) {
console.log(`Is ${i} even? ${isEven(i)}`);
}

//Step 2
function multiply(x, y) {
    return x * y;
}

while (true) {
    
const num1 = parseFloat(prompt('Enter the first number:'));
    if (num1 < 0 || isNaN(num1)) {
        console.log('Exiting the loop. Invalid or negative input.');
        break;
    }
    const num2 = parseFloat(prompt('Enter the second number:'));
    if (num2 < 0 || isNaN(num2)) {
        console.log('Exiting the loop. Invalid or negative input.');
        break;
    }
    const product = multiply(num1, num2);
    console.log(`The product of ${num1} and ${num2} is: ${product}`);
}

//Step 6
function reverseString(str) {
    return str.split('').reverse().join('');
}
const reversedResult = reverseString('hello');

console.log(reversedResult);

// Step 7
function countVowels(str) {
const lowerCaseStr = str.toLowerCase();
const vowelCount = (lowerCaseStr.match(/[aeiou]/g) || []).length;
    return vowelCount;
}

const vowelsCountResult = countVowels('JavaScript');

console.log(`Number of vowels in the word 'JavaScript': ${vowelsCountResult}`);

//Step 9
function findMax(numbers) {
const max = Math.max(...numbers);
    return max;
}

const maxResult = findMax([4, 9, 2, 7, 5]);

console.log(`Max value of array: ${maxResult}`);

//Step 11
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1; 
    } else {
        return number * calculateFactorial(number - 1);
    }
}
const factorialResult = calculateFactorial(5);

console.log(`Factorial of 5: ${factorialResult}`);

//Step 13
function isPalindrome(str) {
const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
const palindromeResult = isPalindrome('level');

console.log(`Is "Level" a palindrome?" ${palindromeResult}`);

//Step 15
function sumArray(numbers) {
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}
const sumResult = sumArray([1, 2, 3, 4, 5]);

console.log(`Sum of the array: ${sumResult}`);

//Step 17
function capitalizeFirstLetter(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return str; 
    }
}
const capitalizedResult = capitalizeFirstLetter('javascript');

console.log(capitalizedResult);

//Step 19
function filterEvenNumbers(numbers) {
const evenNumbers = numbers.filter(number => number % 2 === 0);
    return evenNumbers;
}
const evenNumbersResult = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(`Even numbers in the array: ${evenNumbersResult}`);