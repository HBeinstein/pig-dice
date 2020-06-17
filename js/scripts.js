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
    endTurn();
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
  let playerTwo = new Player("Jeff", 0, 0, 0);

  $("#player-one-roll").click(function() {
    if ($("#player-one-roll").hasClass("activePlayer") === true) {
      playerOne.rollDice();
      $("#player-one-dice-roll").text(playerOne.diceRoll);
      $("#player-one-round-score").text(playerOne.roundScore);
    }
    else {
      $("#player-one-text").text("It is not your turn!");
      $("#player-two-text").text("");
    }
  })
  $("#player-one-hold").click(function() {
    playerOne.hold();
    endTurn();
    $("#player-one-dice-roll").text(0);
    $("#player-one-round-score").text(0);
    $("#player-one-total-score").text(playerOne.totalScore)
    $("#player-two-text").text("");
  })

  $("#player-two-roll").click(function() {
    if ($("#player-two-roll").hasClass("activePlayer") === true) {
      playerTwo.rollDice();
      $("#player-two-dice-roll").text(playerTwo.diceRoll);
      $("#player-two-round-score").text(playerTwo.roundScore);
    }
    else {
      $("#player-two-text").text("It is not your turn!");
      $("#player-one-text").text("");
    }
  })
  $("#player-two-hold").click(function() {
    playerTwo.hold();
    endTurn();
    $("#player-two-dice-roll").text(0);
    $("#player-two-round-score").text(0);
    $("#player-two-total-score").text(playerTwo.totalScore)
    $("#player-one-text").text("");
  })
})
