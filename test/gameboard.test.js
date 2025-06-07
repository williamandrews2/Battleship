import { Gameboard } from "../src/gameboard.js";

describe("Placing a ship", () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });

  it("Properly place a horizontal ship on the empty gameboard", () => {
    board.placeShip(0, 0, 3, "horizontal");

    for (let i = 0; i < 3; i++) {
      const cell = board.board[0][i];
      expect(cell).not.toBeNull();
    }
  });

  it("Properly place a vertical ship on the empty gameboard", () => {
    board.placeShip(0, 0, 3, "vertical");

    for (let i = 0; i < 3; i++) {
      const cell = board.board[i][0];
      expect(cell).not.toBeNull();
    }
  });

  it("Properly handle overlapping ships", () => {
    board.placeShip(0, 0, 3, "horizontal");
    expect(() => {
      board.placeShip(0, 0, 2, "vertical");
    }).toThrow("Invalid ship placement");
  });

  it("Properly handle out of bounds ship placement", () => {
    expect(() => {
      board.placeShip(9, 9, 2, "vertical");
    }).toThrow("Invalid ship placement");
  });

  it("Adds ship to the ship list", () => {
    board.placeShip(0, 0, 3, "horizontal");
    expect(board.ships.length).toBe(1);
    expect(board.ships[0].length).toBe(3);
  });

  it("Properly handle invalid ship direction", () => {
    expect(() => {
      board.placeShip(0, 0, 3, "diagonal");
    }).toThrow("Invalid direction");
  });
});
