import computer from "./computer.js";
import gameController from "./gameController.js";

let selectedShip = "Carrier";
let orientation = "horizontal";
let placedShips = [];
let realPlayer, computerPlayer;

const shipLengths = {
  Carrier: 5,
  Battleship: 4,
  Cruiser: 3,
  Submarine: 3,
  Destroyer: 2,
};

const container = document.getElementById("gameboard-wrapper");

// this is the initial call that will begin the UI rendering.
const setupPlayers = (player1, player2) => {
  if (player1 && player2) {
    realPlayer = player1;
    computerPlayer = player2;
  } else {
    alert("Invalid player input!");
  }
  renderSetup(); // begin setup for the player
  computer.setupBoard(computerPlayer); // allow the computer to randomly set their ships on the board
};

const renderSetup = () => {
  const gameboardContainer = document.createElement("div");
  gameboardContainer.classList.add("gameboard-container");

  const setupHeader = document.createElement("h2");
  setupHeader.innerText = "Place Your Ships";
  gameboardContainer.appendChild(setupHeader);

  const gameboard = document.createElement("div");
  gameboard.className = "gameboard";

  const size = realPlayer.gameboard.size;

  // render the board and add event listeners to the cells
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.dataset.x = x;
      cell.dataset.y = y;

      // highlight the cell a high-contrast color to show the preview of the
      // ship to be placed.
      cell.addEventListener("mouseenter", () => {
        highlightShip(x, y, orientation, shipLengths[selectedShip], "preview");
      });
      cell.addEventListener("mouseleave", () => {
        clearPreview();
      });

      // place the ship
      cell.addEventListener("click", () => {
        const length = shipLengths[selectedShip];
        const success = realPlayer.gameboard.placeShip(
          x,
          y,
          length,
          orientation
        );
        if (success) {
          placedShips.push(selectedShip);
          highlightShip(
            x,
            y,
            orientation,
            shipLengths[selectedShip],
            "preview-placed"
          );
          if (placedShips.length === Object.keys(shipLengths).length) {
            // begin the game
            gameController.startGame(realPlayer, computerPlayer);
            renderThinkingMsg();
          } else {
            updateShipSelect(); // move to next ship
          }
        } else {
          alert("Invalid placement. Try again.");
        }
      });

      gameboard.appendChild(cell);
    }
  }

  gameboardContainer.appendChild(gameboard);

  // ship selection UI
  const controlPanel = document.createElement("div");
  controlPanel.classList.add("setup-controls");

  // drop down to select which ship to place
  const select = document.createElement("select");
  select.id = "ship-select";
  for (let ship in shipLengths) {
    if (!placedShips.includes(ship)) {
      const option = document.createElement("option");
      option.value = ship;
      option.textContent = `${ship} (${shipLengths[ship]})`;
      select.appendChild(option);
    }
  }
  select.value = selectedShip; // default value for the drop down
  select.addEventListener("change", (e) => {
    selectedShip = e.target.value;
  });

  // button for rotating ships before placement
  const rotateBtn = document.createElement("button");
  rotateBtn.textContent = `Rotate (${orientation})`;
  rotateBtn.addEventListener("click", () => {
    orientation = orientation === "horizontal" ? "vertical" : "horizontal";
    rotateBtn.textContent = `Rotate (${orientation})`;
  });

  controlPanel.appendChild(select);
  controlPanel.appendChild(rotateBtn);
  gameboardContainer.appendChild(controlPanel);

  container.innerHTML = "";
  container.appendChild(gameboardContainer);
};

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

      // TODO: add this statement into an if statement once
      // confirmed working (hide opponents ships from user).
      addCellStyles(x, y, player, cell);

      // only attack the opponent and not the player
      if (player.type === "computer") {
        cell.addEventListener("click", () => {
          gameController.playTurn(x, y);
        });
      }

      cell.dataset.x = x;
      cell.dataset.y = y;
      gameboard.appendChild(cell);
    }
  }

  gameboardContainer.appendChild(gameboard);
  container.appendChild(gameboardContainer);
};

function addCellStyles(x, y, player, cell) {
  const data = player.gameboard.board[y][x];
  if (data?.ship) {
    cell.classList.add("ship");

    if (data.hit) {
      cell.classList.add("hit");
    }
  } else if (player.gameboard.board[y][x] === "miss") {
    cell.classList.add("miss");
  }
}

function highlightShip(x, y, orientation, length, style) {
  for (let i = 0; i < length; i++) {
    const row = orientation === "vertical" ? y + i : y;
    const col = orientation === "horizontal" ? x + i : x;
    const cell = document.querySelector(`[data-x='${col}'][data-y='${row}']`);
    if (cell) {
      cell.classList.add(`${style}`);
    }
  }
}

function clearPreview() {
  document
    .querySelectorAll(".cell.preview")
    .forEach((cell) => cell.classList.remove("preview"));
}

function updateShipSelect() {
  const unplaced = Object.keys(shipLengths).filter(
    (ship) => !placedShips.includes(ship)
  );
  if (unplaced.length > 0) {
    selectedShip = unplaced[0]; // choose the next unplaced ship
  }
  document.getElementById("ship-select").value = selectedShip;
}

function renderThinkingMsg() {
  const thinkingMsg = document.createElement("div");
  thinkingMsg.id = "thinking-message";
  thinkingMsg.textContent = "Opponent thinking...";
  thinkingMsg.style.display = "none";
  thinkingMsg.classList.add("thinking-message");
  document.body.appendChild(thinkingMsg);
}

export default { setupPlayers, renderGameboard };
