function guessNumber(){
    

const random = Math.floor(Math.random() * 10) + 1;

// Generate a random number between 1 and 10.
let number = parseInt(prompt('Guess a number from 1 to 10: '));

// Guess what the random generated number is
while(number !== random) {
    number = parseInt(prompt('Guess a number from 1 to 10: '));
    console.log('Wrong Number');
}

// Check if the guess is correct.
if(number == random) {
    console.log('You guessed the correct number.');
}
}
guessNumber();