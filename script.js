'use strict';

/*
//her .message is a class name in html
console.log(document.querySelector('.message').textContent);

//changing the element content
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

//get the input tag value from html
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//set secret number when page is loaded
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayTextContent = (className, message) => {
  document.querySelector(className).textContent = message;
};
// add evvent linstner when button is clicked .. here .check is the class name of a button
document.querySelector('.check').addEventListener('click', () => {
  //every input value will return as string so converting to number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //  if no number is enter and click  the number it input will retrun as 0. 0 is a falssey value .. so !guess will be true
  if (!guess) {
    displayTextContent('.message', '👀 No Number!');
  } else if (guess === secretNumber) {
    displayTextContent('.message', '🎉 Correct Number!');
    displayTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      displayTextContent('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayTextContent(
        '.message',
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      displayTextContent('.score', score);
    } else {
      displayTextContent('.message', '💥You loss the game');
      displayTextContent('.score', 0);
    }
  }
});

//reset the game
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayTextContent('.message', 'Start guessing...');
  displayTextContent('.score', score);
  displayTextContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
