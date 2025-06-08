import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(type) {
    if (type !== "real" && type !== "computer") {
      throw new Error("Invalid player type!");
    }
    this.type = type;
    this.gameboard = new Gameboard();
  }
}
