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

describe("Executing attacks on a ship", () => {
  let board;

  beforeEach(() => {
    board = new Gameboard();
  });

  it("Properly handle an attack hitting a ship", () => {
    board.placeShip(0, 0, 3, "horizontal");
    board.receiveAttack(1, 0); // attack at x=1, y=0
    expect(board.board[0][0].ship.hits).toBe(1);
    expect(board.board[0][1].ship.hits).toBe(1);
    expect(board.board[0][2].ship.hits).toBe(1);
    expect(board.receiveAttack(1, 0)).toBe("hit");
    expect(board.allShipsSunk()).toBe(false);
  });

  it("Properly handle an attack that misses a ship", () => {
    expect(board.receiveAttack(1, 0)).toBe("miss");
  });

  it("Properly handle a ship taking 100% damage", () => {
    board.placeShip(0, 0, 3, "horizontal");
    board.receiveAttack(1, 0);
    board.receiveAttack(0, 0);
    board.receiveAttack(2, 0);
    expect(board.board[0][0].ship.hits).toBe(3);
    expect(board.board[0][0].ship.sunk).toBe(true);
  });

  it("Properly handle all ships being sunk", () => {
    board.placeShip(0, 0, 3, "horizontal");
    board.placeShip(5, 5, 1, "vertical");

    board.receiveAttack(1, 0);
    board.receiveAttack(0, 0);
    board.receiveAttack(2, 0);

    board.receiveAttack(5, 5);
    board.receiveAttack(6, 5);

    expect(board.allShipsSunk()).toBe(true);
  });
});
