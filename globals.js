
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
const pegDX = 262;//252;//242;
const pegDY = 196;

const buttonX = halfx;
const buttonY = 1473;

const pegChangeInterval = 30.0; // half second

const pegScale = 0.9;
const ballScale = 0.85;

const minLimitX = -80;
const maxLimitX = xsize + 80;


let tallybg;
let tallyMtr;

let autoRecord = false;
let autoRecordNumber = 0;

let useRecordedBall = false;
let numRecordedBallCCHits = -1;
let recordedBallIdx = 0;


const launchBallX = 65;
const launchBallStartY = 565;
const launchBallStartDY = 89;

const launcherX = 65;
const launcherY = 821;
const launcherTopY = 525;
const launcherBotY = 1004;

const launcherMaskW = 108;
const launcherMaskH = 574

const endYLine = 1261;


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


const shufflePatterns = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
];

let particleEmitters = [];
let particleEmitterIdx = 0;
const particleTravelTime = 50.0;
