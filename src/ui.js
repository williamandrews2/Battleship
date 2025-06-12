import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { Ship } from "./ship.js";

const container = document.getElementById("gameboard-container");

const renderGameboard = (player) => {
  const gameboardContainer = document.createElement("div");
  gameboardContainer.classList.add("gameboard-container");

  const playerName = document.createElement("h2");
  playerName.classList.add("player-name");
  playerName.innerText = player.type === "real" ? "You" : "Computer";
  gameboardContainer.appendChild(playerName);

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
        }
      } else if (player.gameboard.board[y][x] === "miss") {
        cell.classList.add("miss");
      }

      console.log(`${x} ${y} ${JSON.stringify(data)}`);

      // these are strings, might need to convert to int for calc
      cell.dataset.x = x;
      cell.dataset.y = y;
      gameboard.appendChild(cell);
    }
  }

  gameboardContainer.appendChild(gameboard);
  container.appendChild(gameboardContainer);
};

export default { renderGameboard };
