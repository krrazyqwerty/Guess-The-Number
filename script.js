let randomNumber;
let attempts = 0;
let isCorret=false
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const resetGame = document.getElementById('resetGame');
const feedback = document.getElementById('feedback');
console.log("Hello")
function startGame() {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log(randomNumber)
    attempts = 0;
    isCorret=false
    feedback.textContent = "";
    guessInput.value = "";
}

function checkGuess() {
    const userGuess = Number(guessInput.value);
    if(!isCorret){
    attempts++;
    }

    if (userGuess === randomNumber) {
        isCorret=true
        feedback.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
    }
}

submitGuess.addEventListener('click', checkGuess);
resetGame.addEventListener('click', startGame);

startGame();