let records = []; 



////////////////////////////////////////////////////////
// 
function recordBall() {

  // check ball hit a lower peg
  let hitBelow8 = false;

  for (let j = 0; hitBelow8==false && j < droppingBall.pegsHit.length; ++j) {
    if (droppingBall.pegsHit[j] >= 9) {
      hitBelow8 = true;
    }
  }

  if (hitBelow8 &&
    droppingBall.repeatBounceRecord < 4 &&
    droppingBall.pegsHit.length >= 4 &&
    droppingBall.pegsHit.length < 10) {

    // only decrement recordable ball drops
    if (autoRecord == true && autoRecordNumber > 0) {
      autoRecordNumber--;

      balanceText.text = autoRecordNumber.toString();

    }

    let i = records.length;
    records[i] = {
      startX: droppingBall.startDropX,
      startDX: droppingBall.startDX,
      pegsHit: droppingBall.pegsHit
    }
  }
}


////////////////////////////////////////////////////////
// 
function makeRecords(num) {
  autoRecordNumber = num;
  autoRecord = true;
}

////////////////////////////////////////////////////////
// 
function dropRecord(sameBall=false, numHits = -1) {

  useRecordedBall = true;
  numRecordedBallCCHits = numHits;
  
  if (sameBall != true) {
    recordedBallIdx = Math.floor(Math.random() * ballRecords.length);
  } 
  // printDroppingRecord(ballRecords[recordedBallIdx]);

  if (numHits == -1) {
    showPegRings(ballRecords[recordedBallIdx]);
  }

  // do it by maths
  if (sameBall == false && numHits == -1) {
    let cc0 = Number(document.getElementById("cc0").value);
    let cc1 = Number(document.getElementById("cc1").value);
    let cc2 = Number(document.getElementById("cc2").value);
    let cc3 = Number(document.getElementById("cc3").value);
    let sum = cc0 + cc1 + cc2 + cc3;

    let r = Math.floor(Math.random() * sum);

    if (r < cc0) {
      numRecordedBallCCHits = 0;
    } else if (r < cc0+cc1) {
      numRecordedBallCCHits = 1;
    } else if (r < cc0+cc1+cc2) {
      numRecordedBallCCHits = 2;
    } else {
      numRecordedBallCCHits = 3;
    }

    console.log("cc num = " + numRecordedBallCCHits);
  }
}



////////////////////////////////////////////////////////
// 
function getPegCount(id) {
  let res = 0;

  for (let i = 0; i < ballRecords.length; ++i) {

    let hit = false;
    for (let j = 0; hit == false && j < ballRecords[i].numPegHits; ++j) {
      if (ballRecords[i].pegsHit[j] == id) {
        res++;
        hit = true;
      }
    }
  }

  return res;
}


////////////////////////////////////////////////////////
// 
function showRecordCounts() {
  let s = "Peg Hit Counts \n";
  s += "\t " + getPegCount(1) + "\t " + getPegCount(2) + "\t " + getPegCount(3) + "\t " + getPegCount(4) + "\n";
  s += "\t" + getPegCount(5) + "\t" + getPegCount(6) + "\t" + getPegCount(7) + "\n";
  s += "\t " + getPegCount(8) + "\t " + getPegCount(9) + "\t " + getPegCount(10) + "\t " + getPegCount(11) + "\n";
  s += "\t" + getPegCount(12) + "\t" + getPegCount(13) + "\t" + getPegCount(14) + "\n";
  s += "\t " + getPegCount(15) + "\t " + getPegCount(16) + "\t " + getPegCount(17) + "\t " + getPegCount(18) + "\n";
  
  
  s += "\n\t\t";
  console.log(s);
}


////////////////////////////////////////////////////////
// 
function printDroppingRecord(bRecord) {
  let s = ",\t  numPegHits:" + bRecord.pegsHit.length;

  console.log(s);
}

////////////////////////////////////////////////////////
// 
function writeRecord() {

  // record settings in comments
  let s = "\n////////////////////////////////////////////////////////////";
  //s += "\n// xbounce = " + document.getElementById("xbounce").value;
  //s += "\n// ybounce = " + document.getElementById("ybounce").value;
  //s += "\n// dxLim = " + document.getElementById("dxLim").value;
  s += "\n////////////////////////////////////////////////////////////"


  // output array
  s += "\n\nlet ballRecords = [";

 
  for (let i = 0; i < records.length; ++i) {

    s += "\n// [" + i + "]";
    s += "\n{  numPegHits:" + records[i].pegsHit.length;
    s += ",\t  startX:" + records[i].startX;
    s += ",\t  startDX:" + records[i].startDX;
    s += ",\t   pegsHit: [";
    for (let j = 0; j < records[i].pegsHit.length - 1; ++j) {
      s += records[i].pegsHit[j] + ", ";
    }
    s += records[i].pegsHit[records[i].pegsHit.length - 1] + "]";

    // todo bounceRecord
    if (i == records.length - 1) {
      s += "\n}";
    } else {
      s += "\n},";
    }
  }

  s += "\n];";

  console.log(s);

}


