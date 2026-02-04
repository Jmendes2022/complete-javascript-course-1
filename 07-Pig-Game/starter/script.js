'use strict';

// DOM ELEMENTS BELOW

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let score0 = 0;
let score1 = 0;
let current0 = 0;
let current1 = 0;
let currentPlayer = 'player 1';
let diceRoll = 1;

diceEl.classList.add('hidden');

score0El.textContent = score0;
score1El.textContent = score1;
current0El.textContent = current0;
current1El.textContent = current1;

function resetGame() {
  score0 = 0;
  score1 = 0;
  current0 = 0;
  current1 = 0;
  currentPlayer = 'player 1';
  diceRoll = 1;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');

  btnRollEl.disabled = false;
  btnHoldEl.disabled = false;

  updateScores();
}

function rollDice() {
  diceRoll = Math.trunc(Math.random() * 6 + 1);
  return;
}

function displayDice() {
  if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }

  diceEl.src = `dice-${diceRoll}.png`;
}

function setCurrentScore() {
  if (currentPlayer == 'player 1') {
    current0 += diceRoll;
  } else {
    current1 += diceRoll;
  }
}

function setScore() {
  if (diceRoll === 1) {
    current0 = 0;
    current1 = 0;
    return;
  }

  if (currentPlayer == 'player 1') {
    score0 += current0;
  } else {
    score1 += current1;
  }

  current0 = 0;
  current1 = 0;
}

function updateScores() {
  score0El.textContent = score0;
  score1El.textContent = score1;
  current0El.textContent = current0;
  current1El.textContent = current1;

  if (score0 >= 100 || score1 >= 100) {
    gameWon();
  }
}

function changePlayer() {
  currentPlayer = currentPlayer == 'player 1' ? 'player 2' : 'player 1';

  if (currentPlayer == 'player 1') {
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  } else {
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
  }
}

function gameWon() {
  if (currentPlayer == 'player 1') {
    player0El.classList.remove('player--active');
    player0El.classList.add('player--winner');
  } else {
    player1El.classList.remove('player--active');
    player1El.classList.add('.player--winner');
  }

  btnRollEl.disabled = true;
  btnHoldEl.disabled = true;
}

// EVENT LISTENERS BELOW --------------------------------

btnRollEl.addEventListener('click', () => {
  rollDice();
  displayDice();

  if (diceRoll === 1) {
    changePlayer();
    setScore();
    updateScores();
  } else {
    setCurrentScore();
    updateScores();
  }
});

btnHoldEl.addEventListener('click', () => {
  setScore();
  if (score0 >= 100 || score1 >= 100) {
    gameWon();
    updateScores();
  } else {
    changePlayer();
    updateScores();
  }
});

btnNewEl.addEventListener('click', () => {
  resetGame();
});
