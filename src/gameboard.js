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
      // throw new Error("Invalid direction");
      return false;
    }

    if (!this.#canPlaceShip(x, y, length, direction)) {
      // throw new Error("Invalid ship placement");
      return false;
    }

    const ship = new Ship(length);

    for (let i = 0; i < length; i++) {
      const row = direction === "vertical" ? y + i : y;
      const col = direction === "horizontal" ? x + i : x;

      // store the ship on the board
      this.board[row][col] = { ship, index: i, hit: false };
    }
    this.ships.push(ship);
    return true;
  }

  #canPlaceShip(x, y, length, direction) {
    for (let i = 0; i < length; i++) {
      const row = direction === "vertical" ? y + i : y;
      const col = direction === "horizontal" ? x + i : x;

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

  receiveAttack(x, y) {
    // board[0][1] refers to the coords (1, 0).
    // "y" is the row, "x" is column.

    const target = this.board[y][x];

    if (target && target.ship) {
      target.ship.hit();
      target.hit = true; // update the position on the board as hit
      return "hit";
    } else {
      this.board[y][x] = "miss";
      return "miss";
    }
  }

  allShipsSunk() {
    const sunkStatus = this.ships.every((ship) => ship.sunk === true);
    return sunkStatus;
  }
}
