var round = []


function diceRoll(diceResult) {
    var diceResult = Math.floor((Math.random() * 6) + 1);
    console.log(diceResult);
    round.push(diceResult);
    console.log(round);
}


function gameBoard(player, roundTotal) {
player = player;
roundTotal = [];
console.log(gameBoard.roundTotal);
}

function player(totalPlayer1, totalPlayer2){
  this.player1 = [];
  this.player2 = [];
}
