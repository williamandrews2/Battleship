// module responsible for controlling the actions and setup of the opponent (computer)

const shipLengths = [5, 4, 3, 3, 2];

const setupBoard = (player) => {
  let x, y, length, orientation;
  for (let i = 0; i < shipLengths.length; i++) {
    x = generateRandomCoord();
    y = generateRandomCoord();
    length = shipLengths[i];
    orientation = generateRandomOrientation();

    let success = player.gameboard.placeShip(x, y, length, orientation);
    // continually retry random coords if ship is not able to be placed
    while (!success) {
      x = generateRandomCoord();
      y = generateRandomCoord();
      success = player.gameboard.placeShip(x, y, length, orientation);
    }
  }
};

function generateRandomCoord() {
  return Math.floor(Math.random() * 10);
}

function generateRandomOrientation() {
  const result = Math.random() < 0.5 ? "horizontal" : "vertical";
  return result;
}

export default { setupBoard };
