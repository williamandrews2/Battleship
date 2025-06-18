import computer from "./computer.js";
import ui from "./ui.js";

let currentPlayer;
let opponent;

let realPlayer;
let computerPlayer;

const container = document.getElementById("gameboard-wrapper");

function startGame(real, computer) {
  realPlayer = real;
  computerPlayer = computer;

  currentPlayer = real;
  opponent = computer;
  refreshUI();
}

function playTurn(x, y) {
  if (!canAttackShip(x, y)) {
    console.log("Unable to attack ship");
    return;
  }
  const result = opponent.gameboard.receiveAttack(x, y);
  refreshUI(); // show updated hit and miss
  if (opponent.gameboard.allShipsSunk()) {
    endGame(currentPlayer);
    return;
  }
  switchTurns();
}

function canAttackShip(x, y) {
  const data = opponent.gameboard.board[y][x];
  console.log(data);
  if (data === null) {
    return true;
  }
  if (data.hit || opponent.gameboard.board[y][x] === "miss") {
    return false;
  }
  return true;
}

function switchTurns() {
  [currentPlayer, opponent] = [opponent, currentPlayer];
  if (currentPlayer === computerPlayer) {
    const [x, y] = computer.chooseAttack();
    setTimeout(() => {
      playTurn(x, y);
    }, 500);
  }
}

function endGame(winner) {
  let winnerMessage;
  if (winner.type === "real") {
    winnerMessage = "You win!";
  } else {
    winnerMessage = "Opponent won.";
  }
  alert(`${winnerMessage}`);
  window.location.reload(); // refresh the page to start a new game
}

function refreshUI() {
  container.innerHTML = "";
  ui.renderGameboard(realPlayer);
  ui.renderGameboard(computerPlayer);
}

export default { startGame, playTurn, canAttackShip };
