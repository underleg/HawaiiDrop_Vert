let records = []; 



////////////////////////////////////////////////////////
// 
function recordBall() {
  
  if (droppingBall.outOfBounds == false &&
    droppingBall.repeatBounceRecord < 4 &&
    droppingBall.pegsHit.length >= 3) {

    // only decrement recordable ball drops
    if (autoRecord == true && autoRecordNumber > 0) {
      autoRecordNumber--;

      balanceText.text = autoRecordNumber.toString();

    }

    let i = records.length;
    records[i] = {
      startPosition: droppingBall.startPosition,
      startX: droppingBall.startX,
      startDX: droppingBall.startDX,
      pegsHit: droppingBall.pegsHit,
      row2Hit: droppingBall.row2,
      row3Hit: droppingBall.row3
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
function dropRecord(sameBall) {

  useRecordedBall = true;
  if (sameBall != true) {
    recordedBallIdx = Math.floor(Math.random() * ballRecords.length);
  }
  // printDroppingRecord(ballRecords[recordedBallIdx]);

  showPegRings(ballRecords[recordedBallIdx]);
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
  s += "\t " + getPegCount(1) + "\t " + getPegCount(2) + "\t " + getPegCount(3) + "\n";
  s += "\t" + getPegCount(4) + "\t" + getPegCount(5) + "\t" + getPegCount(6) + "\t" + getPegCount(7) + "\n";
  s += "\t " + getPegCount(8) + "\t " + getPegCount(9) + "\t " + getPegCount(10) + "\n";
  s += "\n\t\t" + getPegCount(9999);
  console.log(s);
}


////////////////////////////////////////////////////////
// 
function printDroppingRecord(bRecord) {
  let s = "\nstartPosition: " + bRecord.startPosition;
  s += ",\t  numPegHits:" + bRecord.pegsHit.length;
  s += ",\t  row2Hit:" + bRecord.row2Hit;
  s += ",\t  row3Hit:" + bRecord.row3Hit;

  console.log(s);
}

////////////////////////////////////////////////////////
// 
function writeRecord() {

  // record settings in comments
  let s = "\n////////////////////////////////////////////////////////////";
  s += "\n// gravity = " + document.getElementById("gravity").value;
  s += "\n// xbounce = " + document.getElementById("xbounce").value;
  s += "\n// ybounce = " + document.getElementById("ybounce").value;
  s += "\n// dxLim = " + document.getElementById("dxLim").value;
  s += "\n// magLim = " + document.getElementById("magLim").value;
  s += "\n////////////////////////////////////////////////////////////"


  // output array
  s += "\n\nlet ballRecords = [";

  for (let i = 0; i < records.length; ++i) {

    s += "\n// [" + i + "]";
    s += "\n{  startPosition:" + records[i].startPosition;
    s += ",\t  numPegHits:" + records[i].pegsHit.length;
    s += ",\t  startX:" + records[i].startX;
    s += ",\t  startDX:" + records[i].startDX;
    s += ",\t  specialPegHit:" + records[i].specialPegHit;
    s += ",\t  row2Hit:" + records[i].row2Hit;
    s += ",\t  row3Hit:" + records[i].row3Hit;
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


