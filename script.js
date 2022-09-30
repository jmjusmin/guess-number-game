'use strict';

// generate the random number
const secretNum = Math.trunc(Math.random() * 20) + 1;
//state variable
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No entry number!';
    //when too high
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      //decrementing score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lose the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').textContent = '👋 Bye 👋';
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').classList.add('inactive');
    }
    //when too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      //decrementing score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣 You lose the game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').textContent = '👋 Bye 👋';
      document.querySelector('.check').disabled = true;
      document.querySelector('.check').classList.add('inactive');
    }
    //when win
  } else {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

document.querySelector('.check').addEventListener('click', () => {
  //reset
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
});
