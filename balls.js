let dropBalls = [];
let resetDropBalls = [];

let droppingBall = null;

let dropPositions = [{ x: halfx - pegDX, y: 91 }, { x: halfx, y: 91 }, { x: halfx + pegDX, y: 91 }];

let BALLTYPE_CASH = 1;
let BALLTYPE_DIAMOND = 2;
let BALLTYPE_FG = 3;


////////////////////////////////////
//
function moveBall(timeDelta) {
  timeDelta = 1.0;
  //console.log(timeDelta);
  let gravity = document.getElementById("gravity").value;
  droppingBall.dy += gravity * timeDelta;
  droppingBall.sprite.x += droppingBall.dx * timeDelta;
  droppingBall.sprite.y += droppingBall.dy * timeDelta;

  if (droppingBall.sprite.x < minLimitX ||
    droppingBall.sprite.x > maxLimitX) {
    droppingBall.outOfBounds = true;
  }
  
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
function isBallDropFinished() {
  if (droppingBall.sprite.y > ysize + 50) {
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

      if (hitPeg.row == 2) {
        droppingBall.row2 = true;    
      } else if (hitPeg.row == 3) {
        droppingBall.row3 = true;
      }
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

  let x = dropPositions[positionId].x;
  let y = dropPositions[positionId].y;


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

  dropBalls[dropBalls.length] = { type: type, dx: 0.0, dy: 0.0, sprite: sprite, ballHit:[]   };
  resetDropBalls[resetDropBalls.length] = { type: type, dx: 0.0, dy: 0.0, sprite: sprite };
}

////////////////////////////////////////////////////////
function pickBallToDrop() {

  let i = Math.floor(Math.random() * dropBalls.length);
  droppingBall = dropBalls[i];
  droppingBall.startPosition = i;
  dropBalls.splice(i, 1);
  let xAdj = 1 + Math.random() * 2;
  if (Math.random() < 0.5) {
    xAdj *= -1;
  }

  droppingBall.dx = Math.random() * 2 - 1;
  droppingBall.sprite.x += xAdj;

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
  droppingBall.outOfBounds = false;
  droppingBall.row2 = false;
  droppingBall.row3 = false;

}

////////////////////////////////////////////////////////
function setRecordedBallToDrop() {

  // pick ball closest to start
  let dist = 999999;
  let idx = -1;

  for (let i = 0; i < dropBalls.length; ++i) {
    let dX = dropBalls[i].sprite.x - ballRecords[recordedBallIdx].startX;
    dX *= dX;
    if (dX < dist) {
      dist = dX;
      idx = i;
    }
  }
  if (idx == -1) {
    idx = 0;
  }
  droppingBall = dropBalls[idx];

  droppingBall.dx = ballRecords[recordedBallIdx].startDX;
  droppingBall.sprite.x = ballRecords[recordedBallIdx].startX;
  InitDropBall();
}
 
////////////////////////////////////////////////////////
function createBalls() {
  addBall(BALLTYPE_CASH, 0);
  addBall(BALLTYPE_FG, 1);
  addBall(BALLTYPE_DIAMOND, 2);
}

////////////////////////////////////////////////////////
function resetBalls() {

  for (let i = 0; i < resetDropBalls.length; ++i) {
    dropBalls[i] = resetDropBalls[i];
    dropBalls[i].sprite.x = dropPositions[i].x;
    dropBalls[i].sprite.y = dropPositions[i].y;
    dropBalls[i].dx = 0.0;
    dropBalls[i].dy = 0.0;

  }
}



////////////////////////////////////////////////////////
function shuffleBalls() {

  let boxes = [0, 1, 2];

  shuffle(boxes);

  for (let i = 0; i < dropBalls.length; ++i) {
    dropBalls[i].sprite.x = dropPositions[boxes[i]].x;
    dropBalls[i].sprite.y = dropPositions[boxes[i]].y;
  }
}

////////////////////////////////////////////////////////
function getDroppingBall() {
  return droppingBall;
}

////////////////////////////////////////////////////////
function areThereMoreBalls() {
  return dropBalls.length > 0;
}

