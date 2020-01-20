const getUserNumber = document.getElementById('userNumber');

const getAttempts = document.getElementById('attempts');

const getGuess = document.getElementById('guess');

const getResults = document.getElementById('results');

let totalAttempts = 4;

function getRandomNumber () {
    const randomNumber = Math.floor(Math.random() * 20);
    return randomNumber;
};

getUserNumber.addEventListener('click', () => {
    totalAttempts--;

    let storeRandomNumber = getRandomNumber();

    document.write('good news! ' + storeRandomNumber);
    
    if (getUserNumber === storeRandomNumber) {
        document.write('good news! ' + storeRandomNumber);
    } ;
});