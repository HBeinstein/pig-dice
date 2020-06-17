// Business Logic
function Player (playerName, currentScore, roundScore, totalScore){
  this.playerName = playerName,
  this.currentScore = currentScore,
  this.roundScore = roundScore,
  this.totalScore = totalScore
}

Player.prototype.addName = function(name){
  this.playerName.push(name); 
}

Player.prototype.rollDice = function() {
  let userRoll = (Math.floor(Math.random()*6+1));
  this.currentScore = userRoll;
  this.roundScore += this.currentScore
}


// User Interface Logic
$(document).ready(function() {
  let playerOne = new Player("Hannah", 0, 0, 0);

  playerOne.rollDice();

  console.log(playerOne);
  console.log(playerOne.currentScore);
})