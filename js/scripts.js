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
    endTurnP1();
  }
  else {
    this.roundScore += this.diceRoll
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
}

const endTurn = function() {
  document.getElementById("player-one-roll").classList.toggle("activePlayer");
  document.getElementById("player-two-roll").classList.toggle("activePlayer");
}

// User Interface Logic
$(document).ready(function() {
  let playerOne = new Player("Hannah", 0, 0, 0);

  $("#player-one-roll").click(function() {
    if ($("#player-one-roll").hasClass("activePlayer") === true) {
      playerOne.rollDice();
      $("#player-one-dice-roll").text(playerOne.diceRoll);
      $("#player-one-round-score").text(playerOne.roundScore);
    }
    else {
      alert("It is not your turn!")
    }
  })
  $("#player-one-hold").click(function() {
    playerOne.hold();
    endTurn();
    $("#player-one-dice-roll").text(0);
    $("#player-one-round-score").text(0);
    $("#player-one-total-score").text(playerOne.totalScore)
  })
})
