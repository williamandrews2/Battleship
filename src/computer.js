// module responsible for controlling the actions and setup of the opponent (computer)
import gameController from "./gameController.js";

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

function chooseAttack() {
  let x = generateRandomCoord();
  let y = generateRandomCoord();

  let success = gameController.canAttackShip(x, y);
  // retry new coordinates if the attack is not able to be executed.
  while (!success) {
    x = generateRandomCoord();
    y = generateRandomCoord();
    success = gameController.canAttackShip(x, y);
  }
  return [x, y];
}

function generateRandomCoord() {
  return Math.floor(Math.random() * 10);
}

function generateRandomOrientation() {
  const result = Math.random() < 0.5 ? "horizontal" : "vertical";
  return result;
}

export default { setupBoard, chooseAttack };
