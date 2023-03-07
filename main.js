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
}

window.onload = startGame();

function pSelect(event) {
    buttons.forEach((button) => button.classList.remove("active"))
    playerChoice = event.target.dataset.option;
    event.target.classList.add("active");

    console.log('player choice: ', playerChoice);

    cSelect();
}

const cSignal = ['rock','paper','scissors'];

function cSelect() {
    const randomSignal = Math.floor(Math.random() * cSignal.length);
    computerChoice = cSignal[randomSignal];
    console.log('computer choice: ', computerChoice);

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
    console.log(win);
}

buttons.forEach(button => 
    button.addEventListener('click', pSelect)
);