import { Ship } from "./ship.js";

export class Gameboard {
  constructor(size = 10) {
    this.size = size;
    this.board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null));
    this.ships = []; // hold the player's ships
  }

  placeShip(x, y, length, direction) {
    if (direction !== "vertical" && direction !== "horizontal") {
      throw new Error("Invalid direction");
    }

    if (!this.#canPlaceShip(x,y,length,direction)) {
      throw new Error("Invalid ship placement");
    }

    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      const row = direction === "vertical" ? x + i : x;
      const col = direction === "horizontal" ? y + i : y;

      // store the ship on the board
      this.board[row][col] = { ship, index: i };
    }
    this.ships.push(ship);
  }

  #canPlaceShip(x, y, length, direction) {
    for (let i = 0; i < length; i++) {
      const row = direction === "vertical" ? x + i : x;
      const col = direction === "horizontal" ? y + i : y;

      // out of bounds check, "is occupied" check
      if (
        row >= this.size ||
        col >= this.size ||
        row < 0 ||
        col < 0 ||
        this.board[row][col] !== null
      ) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {}
}
