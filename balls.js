let dropBalls = [];
let resetDropBalls = [];

let droppingBall = null;

let tube;
let launcher;
let launcherMask;
let cockCounter = 0.0;

let BALLTYPE_CASH = 1;
let BALLTYPE_DIAMOND = 2;
let BALLTYPE_FG = 3;

const HAMMER_WAIT = 0;
const HAMMER_COCK = 1;
const HAMMER_FIRE = 2;
const HAMMER_FLY  = 3;
const HAMMER_DONE = 4;

let hammerState = HAMMER_WAIT;



////////////////////////////////////
//
function moveBall(timeDelta) {
  timeDelta = 1.0;
  //console.log(timeDelta);
  let gravity = document.getElementById("gravity").value;
  droppingBall.dy += gravity * timeDelta;
  droppingBall.sprite.x += droppingBall.dx * timeDelta;
  droppingBall.sprite.y += droppingBall.dy * timeDelta;

}

///////////////////////////////////////
//
function createLauncher() {
  let name = "gfx/tube.png";
  tube = PIXI.Sprite.from(name);
  app.stage.addChild(tube);
  tube.anchor.x = tube.anchor.y = 0.5;
  tube.x = launcherX;
  tube.y = launcherY;


  name = "gfx/launcher.png";
  launcher = PIXI.Sprite.from(name);
  app.stage.addChild(launcher);
  launcher.anchor.x = 0.5;
  launcher.anchor.y = 0.0;
  launcher.x = launcherX;
  launcher.y = launcherTopY;

  launcherMask = PIXI.Sprite.from("gfx/launcherMask.png");
  app.stage.addChild(launcherMask);
  launcherMask.anchor.x = launcherMask.anchor.y = 0.5;
  launcherMask.x = launcherX;
  launcherMask.y = launcherY;

  launcher.mask = launcherMask;
  
}

// revert last ball move
function revertBallMove(timeDelta) {
  timeDelta = 1.0;
  droppingBall.sprite.x -= droppingBall.dx * timeDelta;
  droppingBall.sprite.y -= droppingBall.dy * timeDelta;
  let gravity = document.getElementById("gravity").value;
  droppingBall.dy -= gravity * timeDelta;

}

////////////////////////////////////////////////////////
//
function resetHammer() {
  hammerState = HAMMER_WAIT;
}


////////////////////////////////////////////////////////
//
function glueBallsToHammer() {

  let y = launcher.y - (dropBalls.length * launchBallStartDY) + (launchBallStartDY /2);

  droppingBall.sprite.y = y - launchBallStartDY;

  for (let i = 0; i < dropBalls.length; ++i) {
    dropBalls[i].sprite.y = y;
    y += launchBallStartDY;
  }
}

////////////////////////////////////////////////////////
//
function hammerCockState(delta) {
  if (launcher.y < launcherBotY) {
    launcher.y += 10 * delta;
  } else {
    cockCounter = 0.0;
    hammerState = HAMMER_FIRE;
  }

  glueBallsToHammer();
}

////////////////////////////////////////////////////////
//
function hammerFireState(delta) {
  if (launcher.y > launcherTopY + (dropBalls.length * launchBallStartDY)) {

    if (cockCounter < 10.0) {
      cockCounter += delta;
    } else {
      launcher.y -= 50 * delta;
    }
  } else {
    launcher.y = launcherTopY + (dropBalls.length * launchBallStartDY);
    hammerState = HAMMER_FLY;
  }

  glueBallsToHammer();
}


////////////////////////////////////////////////////////
//
function hammerFlyState(delta) {
  if (droppingBall.y > -100) {
    droppingBall.y -= 30 * delta;
  } else {
    hammerState = HAMMER_DONE;
  }
}

////////////////////////////////////////////////////////
//
function fireHammer(delta) {

  let res = false;

  if (hammerState == HAMMER_WAIT) {
    hammerState = HAMMER_COCK;
  } else if (hammerState == HAMMER_COCK) {
    hammerCockState(delta);
  } else if (hammerState == HAMMER_FIRE) {
    hammerFireState(delta);
  } else if (hammerState == HAMMER_FLY) {
    hammerFlyState(delta);
  } else if (hammerState == HAMMER_DONE) {
    res = true;
  }

  return res;
}

////////////////////////////////////////////////////////
//
function fireBall(delta) {
  let res = false;

  if (droppingBall.sprite.y > -200) {
    droppingBall.sprite.y -= 50 * delta;
  } else {

    droppingBall.sprite.x = droppingBall.startDropX;
    res = true;
  }

  return res;
}

////////////////////////////////////////////////////////
function isBallDropFinished() {
  if (droppingBall.sprite.y > endYLine ||
    droppingBall.sprite.x < minLimitX ||
    droppingBall.sprite.x > maxLimitX) {
    return true;
  }
  return false;
}


////////////////////////////////////
// bounce ball away from peg
function bounceAway(peg, timeDelta) {
  // get unit vector from peg to ball
  let pb = { x: (peg.x - droppingBall.sprite.x), y: (peg.y - droppingBall.sprite.y) }
  let mag = Math.sqrt(pb.x * pb.x + pb.y * pb.y);
  pb.x /= mag;
  pb.y /= mag;

  mag = Math.sqrt(droppingBall.dx * droppingBall.dx + droppingBall.dy * droppingBall.dy);

  var ang = Math.atan2(pb.y, pb.x);

  let xbounce = document.getElementById("xbounce").value;
  let ybounce = document.getElementById("ybounce").value;

  let magLim = document.getElementById("magLim").value;

  if (mag > magLim) {
    mag = magLim;
  }


  let ax = xbounce * mag * Math.cos(ang);
  let ay = ybounce * mag * Math.sin(ang);

  droppingBall.dx -= ax;
  droppingBall.dy -= ay;

  let dxLim = document.getElementById("dxLim").value;

  // make sure there's x movement
  if (droppingBall.dx > -dxLim && droppingBall.dx < dxLim) {

    if (droppingBall.dx < 0.0) {
      droppingBall.dx = -dxLim;
    } else {
      droppingBall.dx = dxLim;
    }
  }
}


////////////////////////////////////////////////////////
function isPegInList(peg) {
  let inList = false;

  for (let i = 0; inList == false && i < droppingBall.pegsHit.length; ++i) {
    if (peg.id == droppingBall.pegsHit[i]) {
      inList = true;
    }
  }

  return inList;
}


////////////////////////////////////////////////////////
function recordPegCollision(hitPeg) {

  droppingBall.bounceCount++;
  // hitting a new peg?
  if (hitPeg.id != droppingBall.lastPegHit) {
    droppingBall.repeatBounceCount = 0;
    droppingBall.lastPegHit = hitPeg.id;

    // record new pegs hit
    if (isPegInList(hitPeg) == false) {
      droppingBall.pegsHit[droppingBall.pegsHit.length] = hitPeg.id;
    }

  } else {
    // count number of repeat hits on a peg
    droppingBall.repeatBounceCount++;
    if (droppingBall.repeatBounceCount > droppingBall.repeatBounceRecord) {
      droppingBall.repeatBounceRecord = droppingBall.repeatBounceCount;
    }
  }
}


////////////////////////////////////////////////////////
function addBall(type, positionId) {

  let x = launchBallX;
  let y = launchBallStartY + dropBalls.length * launchBallStartDY;

  // BIG BALL
  let name = "gfx/ball_cash.png";

  if (type == BALLTYPE_DIAMOND) {
    name = "gfx/ball_diamond.png";
  } else if (type == BALLTYPE_FG) {
    name = "gfx/ball_fg.png";
  }

  let sprite = PIXI.Sprite.from(name);
  app.stage.addChild(sprite);
  sprite.anchor.x = sprite.anchor.y = 0.5;
  sprite.x = x;
  sprite.y = y;
  sprite.scale.x = sprite.scale.y = ballScale;

  dropBalls[dropBalls.length] = { type: type, dx: 0.0, dy: 0.0, sprite: sprite, ballHit: [] };
  resetDropBalls[resetDropBalls.length] = { type: type, dx: 0.0, dy: 0.0, sprite: sprite };


  launcher.y = launcherTopY + dropBalls.length * launchBallStartDY;
}

////////////////////////////////////////////////////////
function setupLaunchBall(useRecorded) {

  let i = 0;
  droppingBall = dropBalls[i];


  dropBalls.splice(i, 1);

  let dropX;
  let dropDX;

  if (useRecorded == true) {

    dropX = ballRecords[recordedBallIdx].startX;
    dropDX = ballRecords[recordedBallIdx].startDX;
    

  } else {

    dropX = pegStartY - 1 + Math.floor( Math.random() * (pegDX * 2) - 4 );
    dropDX = Math.floor(Math.random() * 2);
  }

  droppingBall.startDX = dropDX;
  droppingBall.dx = dropDX;
  droppingBall.startDropX = dropX;

  InitDropBall();
}

////////////////////////////////////////////////////////
function InitDropBall() {

  droppingBall.startX = droppingBall.sprite.x;
  droppingBall.startDX = droppingBall.dx;

  droppingBall.pegsHit = [];
  droppingBall.lastPegHit = -1;
  droppingBall.bounceCount = 0;
  droppingBall.repeatBounceCount = 0;
  droppingBall.repeatBounceRecord = 0;
}


////////////////////////////////////////////////////////
function createBalls() {
  createLauncher();
  addBall(BALLTYPE_CASH, 0);
  addBall(BALLTYPE_FG, 1);
  addBall(BALLTYPE_DIAMOND, 2);
  addBall(BALLTYPE_CASH, 3);
  addBall(BALLTYPE_FG, 4);
}

////////////////////////////////////////////////////////
function resetBalls() {

  let y = launchBallStartY;

  for (let i = 0; i < resetDropBalls.length; ++i) {
    dropBalls[i] = resetDropBalls[i];
    dropBalls[i].sprite.x = launchBallX;
    dropBalls[i].sprite.y = y;
    
    dropBalls[i].dx = 0.0;
    dropBalls[i].dy = 0.0;

    y += launchBallStartDY;
  }

  launcher.y = launcherTopY + (dropBalls.length * launchBallStartDY);
}


////////////////////////////////////////////////////////
function getDroppingBall() {
  return droppingBall;
}

////////////////////////////////////////////////////////
function areThereMoreBalls() {
  return dropBalls.length > 0;
}

