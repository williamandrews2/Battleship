import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";

const container = document.getElementById("gameboard-container");

const renderGameboard = (player) => {
  container.innerHTML = "";
  const gameboard = document.createElement("div");
  gameboard.className = "gameboard";

  const size = player.gameboard.size;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const data = player.gameboard.board[y][x];

      if (data?.ship) {
        cell.classList.add("ship");

        if (data.hit) {
          cell.classList.add("hit");
        } else if (data === "miss") {
          cell.classList.add("miss");
        }
      }

      // these are strings, might need to convert to int for calc
      cell.dataset.x = x;
      cell.dataset.y = y;
      gameboard.appendChild(cell);
    }
  }

  container.appendChild(gameboard);
};

export default { renderGameboard };
