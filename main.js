const pPoints = document.querySelector('.p-points');
const cPoints = document.querySelector('.c-points');
const buttons = document.querySelectorAll('.images button');
const pChoice = document.querySelector('.p-choice');
const cChoice = document.querySelector('c-choice');
const result = document.querySelector('.game-result');
const resetGame = document.querySelector('.reset-game');

let playerPoints = 0;
let playerChoice = '';
let computerPoints = 0;
let computerChoice = '';

function startGame() {
    pPoints.innerHTML = playerPoints;
    cPoints.innerHTML = computerPoints;
}

window.onload = startGame();