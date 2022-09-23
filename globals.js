
const gravity = 0.5;
const collisionLengthSquared = 1200;
const xbounce = 1.3;
const ybounce = 1.5;
const dxLim = 0.4;
const magLim = 20;


const xsize = 1080;
const ysize = 1920;

const screenScale = 0.4;

const halfx = xsize / 2;

// 1.266

const pegStartY = 274;
const pegDX = 242;
const pegDY = 196;

const buttonX = halfx;
const buttonY = 1473;

const pegChangeInterval = 30.0; // half second

const pegScale = 0.8;
const ballScale = 0.85;

const minLimitX = -80;
const maxLimitX = xsize + 80;


let autoRecord = false;
let autoRecordNumber = 0;

let useRecordedBall = false;
let recordedBallIdx = 0;

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
