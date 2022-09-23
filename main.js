


let maths;
let spinButton;

let winText;
let bonusText;

let fgText;

let balance = 1000000;
let bet = 10;
let win = 0;

let STATE_WAIT = 1;
let STATE_FALL = 2;
let STATE_PRIZE = 3;

let state = STATE_WAIT;

let bgImage;

let gWin = 0;

let app;


////////////////////////////////////////////////////////
function loadBackground() {
  let name = "gfx/bg_1080_1920.jpg";
  bgImage = PIXI.Sprite.from(name);
  app.stage.addChild(bgImage);
  bgImage.visible = true;

}


////////////////////////////////////////////////////////
function scaleButton(scl) {
  spinButton.scale.x = scl;
  spinButton.scale.y = scl;
}


////////////////////////////////////////////////////////
function createMaths() {

  maths = {
    currentWin: 0,
    currentBet: 10,
    currentBalance: 10000000,
    numGamesPlayed: 0,
    sumWin: 0,
    sumBet: 0,
    winningGames: 0
  };

}

////////////////////////////////////////////////////////
function createWinMessage() {

  const fontStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    align: "center",
    fontSize: 180,
    fontWeight: 'bold',
    fill: ['#FFFFFF'],
  });


  winText = new PIXI.Text(0, fontStyle);
  winText.x = 539;
  winText.y = 813;
  winText.anchor.x = winText.anchor.y = 0.5;
  app.stage.addChild(winText);
  winText.text = "+3 FREE GAMES";

  winText.visible = false;
}



////////////////////////////////////////////////////////
function createMeters() {

  const fontStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    align: "center",
    fontSize: 32,
    fontWeight: 'bold',
    fill: ['#ffffff'],
  });


  balanceText = new PIXI.Text(0, fontStyle);
  balanceText.x = 201;
  balanceText.y = 1780;
  balanceText.anchor.x = balanceText.anchor.y = 0.5;
  app.stage.addChild(balanceText);
  balanceText.text = "$100.00";
  balanceText.cash = 100.00;
  
  betText = new PIXI.Text(0, fontStyle);
  betText.x = 873;
  betText.y = 1780;
  betText.anchor.x = betText.anchor.y = 0.5;
  betText.text = "$1.50"
  app.stage.addChild(betText);
}



////////////////////////////////////////////////////////
function createFGMeters() {

  const fontStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    align: "center",
    fontSize: 96,
    fontWeight: 'bold',
    fill: ['#ffffff'],
  });


  fgText = new PIXI.Text(0, fontStyle);
  fgText.x = 875;
  fgText.y = 1505;
  fgText.anchor.x = fgText.anchor.y = 0.5;
  app.stage.addChild(fgText);
  fgText.text = "3/5";
  fgText.totalFG = 5;

}


////////////////////////////////////////////////////////
function dropBall(useRecorded = false) {

  if (state == STATE_WAIT) {
    spinButton.interactive = false;
    spinButton.visible = false;
    //console.log("throw");

    /*
    balanceText.cash -= 1.00;

    balanceText.text = balanceText.cash.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    */


    randomizePegs();
    shuffleBalls();

    if (useRecorded) {
      setRecordedBallToDrop();
    } else {
      pickBallToDrop();
    }
    state = STATE_FALL;
  }
}

////////////////////////////////////////////////////////
function createButton() {

  // BIG BALL
  let name = "gfx/button.png";

  spinButton = PIXI.Sprite.from(name);
  app.stage.addChild(spinButton);
  spinButton.anchor.x = spinButton.anchor.y = 0.5;
  spinButton.x = buttonX;
  spinButton.y = buttonY;

  spinButton.on('click', function (e) {
    clearPegRings();
    dropBall();
  });

  spinButton.on('mouseover', function (e) {
    scaleButton(0.95);
  });

  spinButton.on('mouseout', function (e) {
    scaleButton(1.0);
  });

  spinButton.interactive = true;
}


////////////////////////////////////////////////////////
// wait for button press
let pegChangeTimer = pegChangeInterval;
function handleWaitState(delta) {

  // console.log("WAIT_STATE");

  pegChangeTimer += delta;

  if (pegChangeTimer > pegChangeInterval) {
    pegChangeTimer -= pegChangeInterval;
    randomizePegs();
    shuffleBalls();
  }

  if (useRecordedBall == true) {
    dropBall(true);
  } else if (autoRecord == true) {
    if (autoRecordNumber > 0) {
      dropBall();
    } else {
      writeRecord();
      autoRecord = false;
    }
  } 
}


////////////////////////////////////////////////////////
// ball fall
function handleFallState(delta) {

  //console.log("FALL_STATE");

  moveBall(delta);
 
  if (checkAllPegCollisions(getDroppingBall(), delta) == false) {
    if (isBallDropFinished()) {
      recordBall();
      if (!areThereMoreBalls() || useRecordedBall == true) {
        resetBalls();
      }

      spinButton.visible = true;
      spinButton.interactive = true;
      state = STATE_WAIT;

      useRecordedBall = false;

    }
  }
}

////////////////////////////////////////////////////////
function handlePrizeState(delta) {

}





////////////////////////////////////////////////////////

function update(delta) {

  if (state == STATE_WAIT) {
    handleWaitState(delta);
  } else if (state == STATE_FALL) {
    handleFallState(delta);
  } else if (state == STATE_PRIZE) {
    handlePrizeState(delta);
  }
}


////////////////////////////////////////////////////////
// Create the application helper and add its render target to the page
let isReady = false;
function ready() {

  app = new PIXI.Application({ backgroundColor: 0xffffff, width: xsize * screenScale, height: ysize * screenScale });
  app.stage.scale.x = screenScale;
  app.stage.scale.y = screenScale;
  document.body.appendChild(app.view);


  // GLOBAL CALLS()
  loadBackground();
  createPegBoard();
  createMaths();
  createBalls();
  createWinMessage();
  createMeters();
  createFGMeters();
  createButton();

  randomizePegs();

  isReady = true;

  /*
  document.getElementById("gravity_form").style.display = "none";
  document.getElementById("collisionLengthSquared_form").style.display = "none";
  document.getElementById("xbounce_form").style.display = "none";
  document.getElementById("ybounce_form").style.display = "none";
  document.getElementById("dxLim_form").style.display = "none";
  document.getElementById("maxLim_form").style.display = "none";
  */

  ////////////////////////////////////////////////////////
  // Add a ticker callback to move the sprite back and forth
  let elapsed = 0.0;
  app.ticker.add((delta) => {

    delta = 1.0;

    update(delta);

    elapsed += delta;

    // if prizeStream is on, drop a recorded ball at intervals 
    if (elapsed > 60.0) {
      elapsed -= 60.0;
    }
  });

}

