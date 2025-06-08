import "./styles.css";

import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import ui from "./ui.js";

const player1 = new Player("real");
const player2 = new Player("computer");
ui.renderGameboard(player1);
document.addEventListener("DOMContentLoaded", () => {});
