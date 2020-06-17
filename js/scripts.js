// Business Logic
function Player (playerName, diceRoll, roundScore, totalScore){
  this.playerName = playerName,
  this.diceRoll = diceRoll,
  this.roundScore = roundScore,
  this.totalScore = totalScore
}

Player.prototype.addName = function(name){
  this.playerName.push(name); 
}

Player.prototype.rollDice = function() {
  let userRoll = (Math.floor(Math.random()*6+1));
  this.diceRoll = userRoll;
  if (userRoll === 1) {
    this.roundScore = 0;
  }
  else {
    this.roundScore += this.diceRoll
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
}

// User Interface Logic
$(document).ready(function() {
  let playerOne = new Player("Hannah", 0, 0, 0);

  $("#player-one-roll").click(function() {
    playerOne.rollDice();
    $("#player-one-dice-roll").text(playerOne.diceRoll);
    $("#player-one-round-score").text(playerOne.roundScore);
  })
  $("#player-one-hold").click(function() {
    playerOne.hold();
    $("#player-one-dice-roll").text(0);
    $("#player-one-round-score").text(0);
    $("#player-one-total-score").text(playerOne.totalScore)
  })
})
