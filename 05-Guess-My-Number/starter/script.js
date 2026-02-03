'use strict';

// HTML ELEMENTS BELOW ---------------------------------------

const secretNumberField = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const messageField = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const resetBtn = document.querySelector('.again');
const highScoreField = document.querySelector('.highscore');

const body = document.querySelector('body');

// GET SECRET NUMBER

function getSecretNumber() {
  const randomNumber = Math.trunc(Math.random() * 20) + 1;
  return randomNumber;
}

function resetGame() {
  secretNumber = getSecretNumber();
  guessInput.value = '';
  scoreField.textContent = score;
  messageField.textContent = 'Start guessing...';
  secretNumberField.textContent = '?';
  body.style.backgroundColor = '#222';
  secretNumberField.style.width = '15rem';
}

let secretNumber = getSecretNumber();
console.log(secretNumber);

// ADJUST SCORE ---------------------------------------------

let score = 20;
let highscore = localStorage.getItem('highscore') || 0;

scoreField.textContent = score;
highScoreField.textContent = highscore;

function decreaseScore() {
  if (score == 0) return;
  score--;
  scoreField.textContent = score;
}

function checkHighScore() {
  if (score > highscore) {
    highscore = score;
    highScoreField.textContent = highscore;
    localStorage.setItem('highscore', Number(highscore));
  }
}

function gameWon() {
  checkHighScore();
  secretNumberField.textContent = secretNumber;
  messageField.textContent = 'Correct Number!';
  body.style.backgroundColor = '#60b347';
  secretNumberField.style.width = '30rem';
}

// EVENT LISTENERS BELOW -------------------------------------

// manages the guess button logic
checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);
  if (!guess) messageField.textContent = 'No Number!';
  else if (guess === secretNumber) {
    gameWon();
  } else if (guess !== secretNumber && score > 1) {
    const message = guess > secretNumber ? 'Too High!' : 'Too Low!';
    messageField.textContent = message;
    decreaseScore();
  } else if (score <= 1) {
    decreaseScore();
    messageField.textContent = 'You lost the game!';
  }
});

resetBtn.addEventListener('click', () => {
  resetGame();
});

// prevent from going lower than 0
guessInput.addEventListener('change', function () {
  if (this.value < 0) this.value = 0;
  if (this.value > 20) this.value = 20;
});
