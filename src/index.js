import "./styles.css";

import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import ui from "./ui.js";

const player1 = new Player("real");
const player2 = new Player("computer");

window.addEventListener("DOMContentLoaded", () => {
  //   ui.renderGameboard(player1);
  //   ui.renderGameboard(player2);

  player1.gameboard.placeShip(4, 4, 3, "horizontal");
  player1.gameboard.receiveAttack(4, 4);
  player1.gameboard.receiveAttack(2, 4);

  ui.renderGameboard(player1);
  ui.renderGameboard(player2);
});
