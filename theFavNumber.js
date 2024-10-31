let favNumber = 11; 

let userGuess;

// To prompt the user until they guess correctly
while (userGuess !== favNumber) {
    // Prompt the user to enter their guess
    userGuess = parseInt(prompt("Guess my favorite number:"));

    // Check if the guess is too high, too low, or correct
    if (userGuess < favNumber) {
        console.log("Too low! Try again."); // to check if the guess is whether too low or high
    } else if (userGuess > favNumber) {
        console.log("Too high! Try again.");
    } else {
        console.log("Correct! Well done.");
    }
}
