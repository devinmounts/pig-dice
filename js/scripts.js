function Player (turn) {
  this.roll = 0;
  this.turnScore = 0;
  this.total = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.diceRoll = function() {
  this.roll = Math.floor((Math.random() * 6) + 1);
}

Player.prototype.checkRoll = function() {
  if (this.roll === 1){
    this.turnScore = 0
  } else {
    this.turnScore += this.roll
  }
}

Player.prototype.hold = function() {
  this.total += this.turnScore;
  this.turnScore = 0;
  this.roll = 0
}

Player.prototype.winner = function() {
  if (this.total >= 100) {
  alert("Winner!!!!");
  }
}

$(function(){
  var player1 = new Player("Player1")
  var player2 = new Player("Player2")

  $("#player1Roll").click(function(e){
    e.preventDefault();
    $("#showRollPlayer1").show();
    $("#showTurnScorePlayer1").show();
    player1.diceRoll();
    player1.checkRoll();
    player1.winner();
    $("#showRollPlayer1").text(player1.roll);
    $("#showTurnScorePlayer1").text(player1.turnScore);
  });
  $("#player1Hold").click(function(e){
    e.preventDefault();
    player1.hold()
    player1.winner()
    $("#showTotalPlayer1").text(player1.total);
    $("#showRollPlayer1").hide();
    $("#showTurnScorePlayer1").hide();
  });
  $("#player2Roll").click(function(e){
    e.preventDefault();
    $("#showRollPlayer2").show();
    $("#showTurnScorePlayer2").show();
    player2.diceRoll();
    player2.checkRoll();
    player2.winner();
    $("#showRollPlayer2").text(player2.roll);
    $("#showTurnScorePlayer2").text(player2.turnScore);
  });
  $("#player2Hold").click(function(e){
    e.preventDefault();
    player2.hold()
    player2.winner()
    $("#showTotalPlayer2").text(player2.total);
    $("#showRollPlayer2").hide();
    $("#showTurnScorePlayer2").hide();
  });
});
























// function player(totalPlayer1, totalPlayer2){
//   this.totalPlayer1 = [];
//   this.totalPlayer2 = [];
// }

  // var diceResult = {
  //   round = []
  //   diceRoll = function(){
  //
  // }

// ############ original diceroll generator; called by html button





//
//
// function gameBoard(roundTotal) {
//   this.roundTotal = [];
//   console.log(gameBoard.roundTotal);
