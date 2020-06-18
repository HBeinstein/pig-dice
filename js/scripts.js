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
  this.diceRoll = 0;
  this.roundScore = 0;
}

const endTurn = function() {
  document.getElementById("p1-buttons").classList.toggle("inactive-player");
  document.getElementById("p2-buttons").classList.toggle("inactive-player");
}

const winner = function(player) {
  if (player.totalScore >= 100) {
  }
}

// User Interface Logic
$(document).ready(function() {
  let playerOne = new Player("Hannah", 0, 0, 0);
  let playerTwo = new Player("Jeff", 0, 0, 0);

  $("#player-one-roll").click(function() {
    playerOne.rollDice();
    $("#player-one-dice-roll").text(playerOne.diceRoll);
    $("#player-one-round-score").text(playerOne.roundScore);
    // if ($("#player-one-roll").hasClass("activePlayer") === true) {
    //   playerOne.rollDice();
    //   $("#player-one-dice-roll").text(playerOne.diceRoll);
    //   $("#player-one-round-score").text(playerOne.roundScore);
    // }
    // else {
    //   $("#player-one-text").text("It is not your turn!");
    //   $("#player-two-text").text("");
    // }
  })
  $("#player-one-hold").click(function() {
    playerOne.hold();
    if (playerOne.totalScore >= 100) {
      $("#winner-message").text(playerOne.playerName + " wins!");
      // hide buttons
    }
    else {
    // playerOne.diceRoll = 0;
    // playerOne.roundScore = 0;
    $("#player-one-dice-roll").text(playerOne.diceRoll);
    $("#player-one-round-score").text(playerOne.roundScore);
    $("#player-one-total-score").text(playerOne.totalScore)
    $("#player-two-text").text("");
    endTurn();
    }
  })

  $("#player-two-roll").click(function() {
    playerTwo.rollDice();
    $("#player-two-dice-roll").text(playerTwo.diceRoll);
    $("#player-two-round-score").text(playerTwo.roundScore);
    // if ($("#player-two-roll").hasClass("activePlayer") === true) {
    //   playerTwo.rollDice();
    //   $("#player-two-dice-roll").text(playerTwo.diceRoll);
    //   $("#player-two-round-score").text(playerTwo.roundScore);
    // }
    // else {
    //   $("#player-two-text").text("It is not your turn!");
    //   $("#player-one-text").text("");
    // }
  })
  $("#player-two-hold").click(function() {
    playerTwo.hold();
    if (playerTwo.totalScore >= 100) {
      $("#winner-message").text(playerTwo.playerName + " wins!");
      // hide buttons
    }
    else {
    $("#player-two-dice-roll").text(0);
    $("#player-two-round-score").text(0);
    $("#player-two-total-score").text(playerTwo.totalScore)
    $("#player-one-text").text("");
    endTurn();
    }
  })
})
