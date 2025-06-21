import computer from "./computer.js";
import ui from "./ui.js";
import audio from "./audio.js";

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
  audio.playMusic();
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
    blockBoard();
    showThinkingMessage();
    const [x, y] = computer.chooseAttack();
    setTimeout(() => {
      playTurn(x, y);
      unblockBoard();
      hideThinkingMessage();
    }, 1000);
  }
}

function showThinkingMessage() {
  document.getElementById("message").style.display = "block";
}

function hideThinkingMessage() {
  document.getElementById("message").style.display = "none";
}

function endGame(winner) {
  if (winner.type === "real") {
    ui.renderWinner("You won!");
  } else {
    ui.renderWinner("Opponent wins.");
  }
}

function refreshUI() {
  container.innerHTML = "";
  ui.renderGameboard(realPlayer);
  ui.renderGameboard(computerPlayer);
}

function blockBoard() {
  container.style.pointerEvents = "none";
}

function unblockBoard() {
  container.style.pointerEvents = "auto";
}

export default { startGame, playTurn, canAttackShip };
