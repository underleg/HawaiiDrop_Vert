let records = []; 



////////////////////////////////////////////////////////
// 
function recordBall() {
  
  if (droppingBall.repeatBounceRecord < 4 &&
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
  s += "\t" + getPegCount(4) + "\t" + getPegCount(5) + "\n";
  s += "\t " + getPegCount(6) + "\t " + getPegCount(7) + "\t " + getPegCount(8) + "\n";
  s += "\t" + getPegCount(9) + "\t" + getPegCount(10) + "\n";
  s += "\t " + getPegCount(11) + "\t " + getPegCount(12) + "\t " + getPegCount(13) + "\n";
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


