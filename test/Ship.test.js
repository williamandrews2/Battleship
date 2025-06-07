import { Ship } from "../src/ship.js";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  it("Ship is created properly", () => {
    expect(ship.length).toBe(3);
    expect(ship.hits).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  it("Ship is properly hit", () => {
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.sunk).toBe(false);
  });

  it("Ship is sunk", () => {
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.sunk).toBe(true);
  });
});
