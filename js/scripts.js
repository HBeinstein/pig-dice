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
  let playerOne = new Player("", 0, 0, 0);
  let playerTwo = new Player("", 0, 0, 0);
  $("form#player-one-name-input").submit(function(event){
    event.preventDefault();
    let p1NameInput = $("input#p1-name").val();
    playerOne.playerName = p1NameInput;
    $("#player-one-name-display").text(playerOne.playerName);
    $("#p1-name-form").toggle();
    $("#p1-panel").toggle();
  });

  $("#player-one-roll").click(function() {
    playerOne.rollDice();
    $("#player-one-dice-roll").text(playerOne.diceRoll);
    $("#player-one-round-score").text(playerOne.roundScore);
  })
  $("#player-one-hold").click(function() {
    playerOne.hold();
    if (playerOne.totalScore >= 100) {
      $("#winner-message").text(playerOne.playerName + " wins!");
    }
    else {
    $("#player-one-dice-roll").text(playerOne.diceRoll);
    $("#player-one-round-score").text(playerOne.roundScore);
    $("#player-one-total-score").text(playerOne.totalScore)
    $("#player-two-text").text("");
    endTurn();
    }
  })
  $("form#player-two-name-input").submit(function(event){
    event.preventDefault();
    let p2NameInput = $("input#p2-name").val();
    playerTwo.playerName = p2NameInput;
    $("#player-two-name-display").text(playerTwo.playerName);
    $("#p2-name-form").toggle();
    $("#p2-panel").toggle();
  });
  $("#player-two-roll").click(function() {
    playerTwo.rollDice();
    $("#player-two-dice-roll").text(playerTwo.diceRoll);
    $("#player-two-round-score").text(playerTwo.roundScore);
  })
  $("#player-two-hold").click(function() {
    playerTwo.hold();
    if (playerTwo.totalScore >= 100) {
      $("#winner-message").text(playerTwo.playerName + " wins!");
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
