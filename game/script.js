document.addEventListener('DOMContentLoaded', function() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById('guessButton').addEventListener('click', checkGuess);

    function checkGuess() {
        // Get the user's guess
        const userGuess = parseInt(document.getElementById('guess').value);

        // Get the message element
        const messageElement = document.getElementById('message');

        // Check if the guess is correct
        if (userGuess === randomNumber) {
            messageElement.textContent = 'Congratulations! You guessed the correct number!';
        } else if (userGuess < randomNumber) {
            messageElement.textContent = 'Too low! Try again.';
        } else {
            messageElement.textContent = 'Too high! Try again.';
        }
    }
});
