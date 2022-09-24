let pegs = []; // collection of all pegs in triangle

////////////////////////////////////
// singlepeg contructor
function addPeg(row, x, y) {
  
  let name1 = "gfx/peg_coconut.png";
  
  let sprite1 = PIXI.Sprite.from(name1);
  app.stage.addChild(sprite1);
  sprite1.anchor.x = sprite1.anchor.y = 0.5;
  sprite1.scale.x = sprite1.scale.y = pegScale;

  sprite1.x = x;
  sprite1.y = y;
  sprite1.visible = true;

  let name2 = "gfx/peg_cc.png";

  let sprite2 = PIXI.Sprite.from(name2);
  app.stage.addChild(sprite2);
  sprite2.anchor.x = sprite2.anchor.y = 0.5;
  sprite2.scale.x = sprite2.scale.y = pegScale;

  sprite2.x = x;
  sprite2.y = y;
  sprite2.visible = false;

  let name3 = "gfx/ring.png";

  let sprite3 = PIXI.Sprite.from(name3);
  app.stage.addChild(sprite3);
  sprite3.anchor.x = sprite3.anchor.y = 0.5;

  sprite3.x = x;
  sprite3.y = y;
  sprite3.visible = false;

  let idx = pegs.length;

  pegs[idx] = { id: (idx+1), row: row, x: x, y: y, spriteOff: sprite1, spriteOn: sprite2, ring: sprite3 };
}


////////////////////////////////////
// create whole peg board
function createPegBoard() {

  let x = xsize / 2;
  let y = pegStartY;
  let stepx = pegDX;
  let stepy = pegDY;
  
  // 1st row
  x -= stepx;
  addPeg(1, x, y);
  x += stepx;
  addPeg(1, x, y);
  x += stepx;
  addPeg(1, x, y);

  // 2nd row
  y += stepy;
  x = (xsize / 2) - (stepx * 0.5);
  addPeg(2, x, y);
  x += stepx;
  addPeg(2, x, y);

  // 3rd row
  y += stepy;
  x = (xsize / 2) - stepx;
  addPeg(3, x, y);
  x += stepx;
  addPeg(3, x, y);
  x += stepx;
  addPeg(3, x, y);

  // 4th row
  y += stepy;
  x = (xsize / 2) - (stepx * 0.5);
  addPeg(4, x, y);
  x += stepx;
  addPeg(4, x, y);

  // 5th row
  y += stepy;
  x = (xsize / 2) - stepx;
  addPeg(5, x, y);
  x += stepx;
  addPeg(5, x, y);
  x += stepx;
  addPeg(5, x, y);

}

////////////////////////////////////
//
function areBallAndPegColliding(peg, ball) {
  let x1 = peg.x;
  let x2 = ball.sprite.x;
  let y1 = peg.y;
  let y2 = ball.sprite.y;

  let collisionLengthSquared = document.getElementById("collisionLengthSquared").value;


  let d2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
  if (d2 < collisionLengthSquared) {
    return true;
  }
  return false;
}

////////////////////////////////////
//
function checkAllPegCollisions(ball, delta) {

  let hitPeg;
  let collided = false;

  for (let i = 0; collided == false && i < pegs.length; ++i) {
    if (areBallAndPegColliding(pegs[i], ball)) {
      collided = true;
      hitPeg = pegs[i];
    }
  }

  if (collided == true) {
    recordPegCollision(hitPeg);
    revertBallMove(delta);
    bounceAway(hitPeg, delta);
    return true;
  }

  return collided;
}

////////////////////////////////////
//
function clearPegRings() {
  for (let i = 0; i < pegs.length; ++i) {
    pegs[i].ring.visible = false;
  }
}


////////////////////////////////////
//
function showPegRings(ballRec) {

  clearPegRings();

  for (i = 0; i < ballRec.numPegHits; ++i) {
    let j = ballRec.pegsHit[i] - 1;
    pegs[j].ring.visible = true;
  }
}


////////////////////////////////////
//
function randomizePegs() {

  let pegArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let numOnPegs = 3;

  let shuffledArray = shuffle(pegArray);

  for (let i = 0; i < pegs.length; ++i) {
    pegs[i].spriteOn.visible = false;
    pegs[i].spriteOff.visible = true;
  }

  for (let j = 0; j < numOnPegs; ++j) {
    let idx = shuffledArray[j];
    pegs[idx].sprite
    pegs[idx].spriteOn.visible = true;
    pegs[idx].spriteOff.visible = false;
  }
}



////////////////////////////////////
//
function forcePegs() {

  // turn off all pegs by default
  for (let i = 0; i < pegs.length; ++i) {
    pegs[i].spriteOn.visible = false;
    pegs[i].spriteOff.visible = true;
  }

  let hitPegs = shuffle(ballRecords[recordedBallIdx].pegsHit);

  for (i = 0; i < numRecordedBallCCHits; ++i) {
    let idx = hitPegs[i] - 1;
    pegs[idx].spriteOn.visible = true;
    pegs[idx].spriteOff.visible = false;
  }


  let notHitPegs = [];

  for (i = 0; i < 13; ++i) {
    let hit = false;
    for (let j = 0; hit == false && j < hitPegs.length; ++j) {
      if (i == hitPegs[j] - 1) {
        hit = true;
      }
    }
    if (hit == false) {
      notHitPegs[notHitPegs.length] = i;
    }
  }

  notHitPegs = shuffle(notHitPegs);

  for (i = 0; i < 3 - numRecordedBallCCHits; ++i) {
    let idx = notHitPegs[i];
    pegs[idx].spriteOn.visible = true;
    pegs[idx].spriteOff.visible = false;
  }




}
