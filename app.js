const getButton = document.getElementById('myCoolButton');

const getAttempts = document.getElementById('attempts');

const getGuess = document.getElementById('guess');

const getResults = document.getElementById('results');

const debug = document.getElementById('lazy');

const getHighscore = document.getElementById('highscore');

const totalAttempts = 4;

let currentAttempts = 1;

let currentHighscore = 0;

function getRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 20)+1;
    return randomNumber;
};

let storeRandomNumber = getRandomNumber();

//debug.textContent = "Random Number Is: " + storeRandomNumber + "  Your Choices: ";

if (currentAttempts) {
    getButton.addEventListener('click', () => {

        let getNumber = document.getElementById('userNumber').value;

        if (currentAttempts > totalAttempts) {
            getGuess.textContent = "That's all the guesses you get!";
            document.getElementById('buttonBox').style.display='none';
        }
        else{

            //debug.textContent += " " + getNumber;
            
            if (getNumber == storeRandomNumber) {
                getResults.textContent = "winner!";
                document.getElementById('buttonBox').style.display='none';
                getGuess.textContent = "Congratulations, you are the";
                
                if (currentHighscore < currentAttempts) {
                    getHighscore.textContent = "High (or low) score: " + currentHighscore + "!";
                };

            } 
            else {

                getResults.textContent = "Try Again";

                if (getNumber > storeRandomNumber) {
                getGuess.textContent = "You guessed too high!";
                }

                else { 
                getGuess.textContent = "You guessed too low!";
                }

                getAttempts.textContent = "You've made " + currentAttempts + " of " + totalAttempts + " guesses";

            };

            currentAttempts++;
        };
    });
}
else {
    
}
