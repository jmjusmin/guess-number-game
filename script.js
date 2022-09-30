'use strict';

//==========================global variable===========================
// generate the random number
let secretNum = Math.trunc(Math.random() * 20) + 1;
//state variable
let score = 20;
let highScore = 0;

//==========================main handle game section===========================
//start game when user click check btn
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  //when no input
  if (!guess) {
    setMessage('⛔ No entry number!');
    //when win
  } else if (guess === secretNum) {
    setMessage('🎉 Correct Number!');
    winnerStyle();
    //when not secret number
  } else if (guess !== secretNum) {
    if (score > 1) {
      setMessage(guess > secretNum ? '📈 Too high!' : '📉 Too low!');
      //decrementing score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessage('💣 You lose the game');
      loseStyle();
    }
  }
});

//restart game when user click again btn
document.querySelector('.again').addEventListener('click', () => {
  //reset
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  setMessage('Start guessing...');
  resetStyle();
});

//==========================set style layout===========================
//set message class
const setMessage = (msg) => {
  document.querySelector('.message').textContent = msg;
};
//set winner

const winnerStyle = () => {
  document.querySelector('.number').textContent = secretNum;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  let currScore = Number(document.querySelector('.score').textContent);
  if (currScore > highScore) {
    highScore = currScore;
    document.querySelector('.highscore').textContent = highScore;
  }
};

//set lose
const loseStyle = () => {
  document.querySelector('.score').textContent = 0;
  document.querySelector('.check').textContent = '👋 Bye 👋';
  document.querySelector('.check').disabled = true;
  document.querySelector('.check').classList.add('inactive');
};

//reset to default style
const resetStyle = () => {
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').classList.remove('inactive');
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.check').disabled = false;
};
