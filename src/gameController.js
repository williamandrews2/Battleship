import computer from "./computer.js";
import { Player } from "./player.js";
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
  const result = opponent.gameboard.receiveAttack(x, y);
  console.log(result);
  refreshUI(); // show updated hit and miss
  if (opponent.gameboard.allShipsSunk()) {
    endGame(currentPlayer);
    return;
  }
  switchTurns();
}

function switchTurns() {
  [currentPlayer, opponent] = [opponent, currentPlayer];
}

function endGame(winner) {
  alert(`${winner.name} wins!`);
  window.location.reload(); // refresh the page to start a new game
}

function refreshUI() {
  container.innerHTML = "";
  ui.renderGameboard(realPlayer);
  ui.renderGameboard(computerPlayer);
}

export default { startGame, playTurn };
