// Variables
var max_number = 100;
var min_number = 1;
let guess;
var guess_number = 1;
const random_number = Math.floor(Math.random()*max_number+min_number);
var debug = true;


//debugging if enabled
if (debug) {
    console.log(`DEBUG: the answer is [${random_number}]`);
}

// Infinite Loop with user input
while (guess_number < 100) {

    //prompting tha user for a guess
    guess = prompt(`Guess a number between ${min_number}-${max_number}`);

    //if the guess was "quit", then end the game
    if (guess == "quit") {
        break;
    }

    //if the guess was wrong, then add 1 to the guess count
    if (guess != random_number) {
        guess_number++ //i = i + 1;
    }

    //if the guess if correct, then you win and show guesses
    if (guess == random_number) {
        alert(`YOU WIN\nwith ${guess_number} guess(es).`);
        break;
    }

    //if the guess is to high, then let the player know
    if (guess > random_number) {
        alert("Your guess was to high.")
    }

    //it the guess is to low, then let the player know
    if (guess < random_number) {
        alert("Your guess was to low.")
    }

}



