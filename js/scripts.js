function Player (roll, turnScore, total) {
  this.playerName;
  this.roll = 0;
  this.turnScore = 0;
  this.total = 0;
  // this.turn = turn;

}
Player.prototype.name = function() {
  return this.playerName
}

Player.prototype.diceRoll = function() {
  if (this.playerName === "Franz") {
    this.roll = Math.floor((Math.random() * 2) + 1);
  } else {
    this.roll = Math.floor((Math.random() * 6) + 1);
  }
}

Player.prototype.checkRoll = function() {
  if (this.roll === 1){
    this.turnScore = 0
    alert("Your turn is over pass the dice.")
  } else {
    this.turnScore += this.roll
  }
}

Player.prototype.hold = function() {
  this.total += this.turnScore;
  this.turnScore = 0;
  this.roll = 0
  alert("Nice move, pass the dice.");
}

// Player.prototype.bonus = function() {
//   if (this.playername === "Franz"){
//     console.log(this.playername);
//     this.roll = 1;
//   }
// }

Player.prototype.winner = function() {
  if (this.total >= 100) {
  alert("Winner!!!!");
  }
}

$(function(){

  var newPlayer1 = new Player();
  var newPlayer2 = new Player();

  $("#enter-name").click(function(e){
    e.preventDefault();
    newPlayer1.playerName = $("#enterPOne").val();
    newPlayer2.playerName = $("#enterPTwo").val();
    $("#showName1").text(newPlayer1.name());
    $("#showName2").text(newPlayer2.name());
    $("#enterPOne").val("");
    $("#enterPTwo").val("");
    // player1Name.push(player1.playerName); //push name into prototype
    // player2.playerName = player2Name; //push name into prototype
  });


  $("#player1Roll").click(function(e){

    e.preventDefault();
    $("#showRollPlayer1").show();
    $("#showTurnScorePlayer1").show();
    // newPlayer1.bonus();
    newPlayer1.diceRoll();
    newPlayer1.checkRoll();
    newPlayer1.winner();
    $("#showRollPlayer1").text(newPlayer1.roll);
    $("#showTurnScorePlayer1").text(newPlayer1.turnScore);
  });
  $("#player1Hold").click(function(e){
    e.preventDefault();
    newPlayer1.hold()
    newPlayer1.winner()
    $("#showTotalPlayer1").text(newPlayer1.total);
    $("#showRollPlayer1").hide();
    $("#showTurnScorePlayer1").hide();
  });
  $("#player2Roll").click(function(e){
    e.preventDefault();
    $("#showRollPlayer2").show();
    $("#showTurnScorePlayer2").show();
    newPlayer2.diceRoll();
    newPlayer2.checkRoll();
    newPlayer2.winner();
    $("#showRollPlayer2").text(newPlayer2.roll);
    $("#showTurnScorePlayer2").text(newPlayer2.turnScore);
  });
  $("#player2Hold").click(function(e){
    e.preventDefault();
    newPlayer2.hold()
    newPlayer2.winner()
    $("#showTotalPlayer2").text(newPlayer2.total);
    $("#showRollPlayer2").hide();
    $("#showTurnScorePlayer2").hide();
  });
});











//
//











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
