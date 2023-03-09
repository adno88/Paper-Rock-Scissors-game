const pPoints = document.querySelector('.p-points');
const cPoints = document.querySelector('.c-points');
const buttons = document.querySelectorAll('.images button');
const pChoice = document.querySelector('.p-choice');
const cChoice = document.querySelector('.c-choice');
const result = document.querySelector('.game-result');
const resetGame = document.querySelector('.reset-game');
const choices = document.querySelector('.choices');

let playerPoints = 0;
let playerChoice = '';
let computerPoints = 0;
let computerChoice = '';

function startGame() {
    pPoints.innerHTML = playerPoints;
    cPoints.innerHTML = computerPoints;
    result.innerHTML = 'Chose your hand signal';
    
    resetGame.classList.remove('active');
}

window.onload = startGame();

function pSelect(event) {
    buttons.forEach((button) => button.classList.remove("active"))
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");

    resetGame.classList.add('active');

    cSelect();
}

const cSignal = ['rock','paper','scissors'];

function cSelect() {
    const randomSignal = Math.floor(Math.random() * cSignal.length);
    computerChoice = cSignal[randomSignal];

    showResult();
}

function showResult() {
    let win = '';

    if((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        win = 'You Win';
        playerPoints++;
        pPoints.innerHTML = playerPoints;
    }
    else if (playerChoice === computerChoice) {
        win='Draw';
    }
    else {
        win = 'You Lose';
        computerPoints++;
        cPoints.innerHTML = computerPoints;
    }
    choices.classList.add('active');
    pChoice.innerHTML = playerChoice;
    cChoice.innerHTML = computerChoice;
    result.innerHTML = win;
}

function resetFunction() {
    choices.classList.remove('active');
    buttons.forEach((button) => button.classList.remove("active"));
    playerPoints = 0;
    computerPoints = 0;
    startGame();
}

buttons.forEach(button => 
    button.addEventListener('click', pSelect)
);
resetGame.addEventListener('click', resetFunction);