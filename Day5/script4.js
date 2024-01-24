/*
//Number 1

function printOrders(inputArray) {
    if (!inputArray || inputArray.length === 0) {
    console.log("Input array is empty.");
    return;
    }
}

var myArray = ["Apple", "Mango", "Orange"];
console.log(myArray);

//Number 2

function printCardDetails(cards) {
    if (typeof cards !== 'object' || cards === null) {
    console.log('Invalid input. Please provide an object.');
    return;
    } 
    console.log('List of keys in the array:');
    for (let key in cards) {
    console.log(`• ${key}`);
    }
    for (let key in cards) {
    console.log(`The value of ${key} in Pyramid Solitaire is ${cards[key]}.`);
    }
    }
let cards = {
    'King': 13,
    'Queen': 12,
    'Jack': 11,
    'Ace': 1
    };

printCardDetails(cards);

//Number 3

function generateRandomScore() {
    return Math.floor(Math.random() * 101);
    }
function evaluateKaraokeScore(score) {
console.log(`Your karaoke score: ${score}`);
if (score < 50) {
    console.log("Never sing again, ever!");
    } 
    else if (score >= 50 && score <= 79) {
    console.log("Practice more!");
    } 
    else if (score >= 80 && score <= 94) {
    console.log("You're getting better!");
    } 
    else if (score >= 95 && score <= 100) {
    console.log("What an excellent singer!");
    } else {
    console.log("Invalid score. Please provide a score between 0 and 100.");
    }
}
const randomScore = generateRandomScore();
evaluateKaraokeScore(randomScore);
*/

//Number 4

function shootingPractice(attempts) {

let successCount = 0;
let epicFailCount = 0;
      
console.log("Practice starts...");
      
for (let attempt = 1; attempt <= attempts; attempt++) {
    const isSuccess = Math.random() < 0.5;
    if (isSuccess) {
        successCount++;
        console.log(`Attempt #${attempt}: Shooting the ball... Success! ... Got ${successCount}x success and ${epicFailCount}x epic fail(s) so far`);
        } 
        else {
        epicFailCount++;
        console.log(`Attempt #${attempt}: Shooting the ball... Epic Fail! ... Got ${successCount}x success and ${epicFailCount}x epic fail(s) so far`);
        }
        }
    console.log("Practice ended.");
    }

shootingPractice(1000);

/*
//Number 5

function converttoblanks(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Invalid input. Please provide an array of numbers.");
        return;
        }
    for (let i = 0; i < numbers.length; i++) {
        const underscoreCount = numbers[i];
        const underscores = "_ ".repeat(underscoreCount).trim(); 
        console.log(underscores);
        }
    }
let sample = [6, 1, 3, 5, 7];
converttoblanks(sample);
*/
