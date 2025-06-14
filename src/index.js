import "./styles.css";
import "./gameboard.css";

import { Player } from "./player.js";
import ui from "./ui.js";

const player1 = new Player("real");
const player2 = new Player("computer");

window.addEventListener("DOMContentLoaded", () => {
  ui.setupPlayers(player1, player2);
});
