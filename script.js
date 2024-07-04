'use strict';

let range =20 ;
let myNum = parseInt((Math.random()*range) + 1);
let score=20;
let highscore=0;
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.range').addEventListener('click',function(){
    const rangeA = Number(document.querySelector('.rangein').value);
    range = rangeA;
    document.querySelector('.between').textContent = `Range:0-${range}` ;
    myNum = parseInt((Math.random()*range) + 1);
}) 

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value) ;
    if(!guess){
        document.querySelector('.message').textContent ='⚠️ No number!';
    }
    else if(guess === myNum){
        displayMessage("👽 CONGRATS! You have guessed the right number");
        document.querySelector('.number').textContent=myNum;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== myNum) {
        if (score > 1) {
          displayMessage(guess > myNum? '📈I guess your expectiations are high. Your number is bigger than mine' : '📉Dream big they say,your number is lesser than my number ');
          score--;
          document.querySelector('.score').textContent = score;
        } else {
          displayMessage('💥 You lost the game!');
          document.querySelector('.score').textContent = 0;
        }
      }
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent=score;
    displayMessage("Start guessing...");
    document.querySelector('.guess').value='';
    document.querySelector('.rangein').value='';
    range = 20;
    document.querySelector('.between').textContent="Range:(default 0-20)";
    document.querySelector('.number').textContent='?';
})


