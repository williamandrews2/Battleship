import backgroundMusic from "./audio/the-last-stand.mp3";
import placeShipSound from "./audio/placing-object-sfx.mp3";
import hitSound from "./audio/explosion-sfx.mp3";
import missSound from "./audio/boom-sfx.mp3";

const playMusic = () => {
  let bgMusic = new Audio(backgroundMusic);
  bgMusic.loop = true;
  bgMusic.volume = 0.1;
  bgMusic.play();
};

const stopMusic = () => {
  bgMusic.pause();
};

const playHit = () => {
  let hitSFX = new Audio(hitSound);
  hitSFX.volume = 0.7;
  hitSFX.play();
};

const playMiss = () => {
  let missSFX = new Audio(missSound);
  missSFX.volume = 0.7;
  missSFX.play();
};

const playPlacingShip = () => {
  let placeShipSFX = new Audio(placeShipSound);
  placeShipSFX.volume = 0.5;
  placeShipSFX.play();
};

export default { playMusic, stopMusic, playHit, playMiss, playPlacingShip };
