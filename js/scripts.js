var Dave = new Player("Dave")

function Player (turn) {
  this.roll = 0;
  this.turnScore = 0;
  this.total = 0;
  this.turn = turn;
  this.playerName;
}

var diceRoll = function(){
  return Math.floor((Math.random() * 20) + 1);
  // return roll
}

Player.prototype.checkRoll = function() {
  if (this.roll === 1){
    this.turnScore = 0
  }else {
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
  $("#buttonRoll").click(function(e){
    e.preventDefault();
    Dave.roll = diceRoll();
    Dave.checkRoll();
    Dave.winner();
    console.log(Dave);
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
