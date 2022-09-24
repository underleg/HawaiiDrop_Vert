////////////////////////////////////////////////////////////
// gravity = 0.5
// xbounce = 1.3
// ybounce = 1.5
// dxLim = 0.4
// magLim = 20
////////////////////////////////////////////////////////////

let ballRecords = [
  // [0]
  {
    numPegHits: 4, startX: 350, startDX: 1, pegsHit: [4, 6, 12, 10]
  },
  // [1]
  {
    numPegHits: 7, startX: 481, startDX: 0, pegsHit: [2, 1, 7, 5, 9, 6, 11]
  },
  // [2]
  {
    numPegHits: 5, startX: 429, startDX: 0, pegsHit: [4, 5, 9, 6, 11]
  },
  // [3]
  {
    numPegHits: 5, startX: 533, startDX: 0, pegsHit: [2, 4, 7, 5, 13]
  },
  // [4]
  {
    numPegHits: 6, startX: 377, startDX: 1, pegsHit: [4, 5, 9, 6, 11, 12]
  },
  // [5]
  {
    numPegHits: 6, startX: 377, startDX: 1, pegsHit: [4, 5, 9, 6, 11, 12]
  },
  // [6]
  {
    numPegHits: 6, startX: 563, startDX: 1, pegsHit: [2, 3, 5, 8, 10, 12]
  },
  // [7]
  {
    numPegHits: 6, startX: 617, startDX: 1, pegsHit: [5, 7, 8, 10, 9, 12]
  },
  // [8]
  {
    numPegHits: 7, startX: 284, startDX: 0, pegsHit: [1, 4, 6, 7, 5, 11, 12]
  },
  // [9]
  {
    numPegHits: 6, startX: 431, startDX: 0, pegsHit: [4, 5, 7, 6, 12, 10]
  },
  // [10]
  {
    numPegHits: 4, startX: 584, startDX: 1, pegsHit: [5, 4, 7, 11]
  },
  // [11]
  {
    numPegHits: 4, startX: 436, startDX: 0, pegsHit: [4, 5, 7, 11]
  },
  // [12]
  {
    numPegHits: 6, startX: 737, startDX: 0, pegsHit: [3, 2, 5, 7, 6, 9]
  },
  // [13]
  {
    numPegHits: 6, startX: 754, startDX: 1, pegsHit: [3, 2, 5, 8, 7, 10]
  },
  // [14]
  {
    numPegHits: 5, startX: 422, startDX: 0, pegsHit: [4, 7, 8, 5, 10]
  },
  // [15]
  {
    numPegHits: 6, startX: 565, startDX: 1, pegsHit: [2, 3, 5, 7, 6, 9]
  },
  // [16]
  {
    numPegHits: 6, startX: 331, startDX: 0, pegsHit: [1, 2, 3, 5, 7, 11]
  },
  // [17]
  {
    numPegHits: 9, startX: 553, startDX: 0, pegsHit: [2, 3, 4, 7, 8, 10, 9, 6, 12]
  },
  // [18]
  {
    numPegHits: 8, startX: 319, startDX: 0, pegsHit: [1, 3, 7, 4, 6, 9, 10, 12]
  },
  // [19]
  {
    numPegHits: 6, startX: 742, startDX: 0, pegsHit: [3, 2, 5, 8, 7, 10]
  },
  // [20]
  {
    numPegHits: 8, startX: 474, startDX: 0, pegsHit: [2, 1, 4, 7, 5, 8, 10, 12]
  },
  // [21]
  {
    numPegHits: 4, startX: 667, startDX: 0, pegsHit: [5, 9, 11, 12]
  },
  // [22]
  {
    numPegHits: 5, startX: 791, startDX: 0, pegsHit: [3, 5, 4, 7, 13]
  },
  // [23]
  {
    numPegHits: 6, startX: 617, startDX: 1, pegsHit: [5, 7, 8, 10, 9, 12]
  },
  // [24]
  {
    numPegHits: 5, startX: 439, startDX: 0, pegsHit: [4, 5, 7, 10, 8]
  },
  // [25]
  {
    numPegHits: 6, startX: 649, startDX: 0, pegsHit: [5, 4, 7, 8, 12, 9]
  },
  // [26]
  {
    numPegHits: 4, startX: 403, startDX: 1, pegsHit: [4, 5, 7, 10]
  },
  // [27]
  {
    numPegHits: 5, startX: 434, startDX: 1, pegsHit: [2, 1, 4, 10, 12]
  },
  // [28]
  {
    numPegHits: 6, startX: 639, startDX: 0, pegsHit: [5, 4, 7, 6, 9, 12]
  },
  // [29]
  {
    numPegHits: 6, startX: 620, startDX: 0, pegsHit: [5, 4, 2, 10, 8, 13]
  },
  // [30]
  {
    numPegHits: 5, startX: 524, startDX: 0, pegsHit: [2, 1, 7, 5, 13]
  },
  // [31]
  {
    numPegHits: 5, startX: 524, startDX: 0, pegsHit: [2, 1, 7, 5, 13]
  },
  // [32]
  {
    numPegHits: 5, startX: 741, startDX: 0, pegsHit: [3, 2, 8, 7, 10]
  },
  // [33]
  {
    numPegHits: 7, startX: 521, startDX: 0, pegsHit: [2, 1, 7, 5, 10, 8, 13]
  },
  // [34]
  {
    numPegHits: 4, startX: 726, startDX: 0, pegsHit: [3, 4, 10, 8]
  },
  // [35]
  {
    numPegHits: 4, startX: 374, startDX: 1, pegsHit: [4, 5, 7, 9]
  },
  // [36]
  {
    numPegHits: 5, startX: 280, startDX: 1, pegsHit: [1, 3, 7, 4, 11]
  },
  // [37]
  {
    numPegHits: 4, startX: 366, startDX: 1, pegsHit: [4, 7, 6, 12]
  },
  // [38]
  {
    numPegHits: 6, startX: 645, startDX: 0, pegsHit: [5, 4, 7, 8, 10, 9]
  },
  // [39]
  {
    numPegHits: 8, startX: 473, startDX: 0, pegsHit: [2, 1, 4, 5, 9, 6, 10, 12]
  },
  // [40]
  {
    numPegHits: 4, startX: 580, startDX: 1, pegsHit: [5, 4, 7, 11]
  },
  // [41]
  {
    numPegHits: 6, startX: 441, startDX: 0, pegsHit: [4, 5, 7, 8, 10, 12]
  },
  // [42]
  {
    numPegHits: 4, startX: 587, startDX: 1, pegsHit: [5, 4, 7, 10]
  },
  // [43]
  {
    numPegHits: 6, startX: 455, startDX: 0, pegsHit: [4, 5, 2, 7, 9, 12]
  },
  // [44]
  {
    numPegHits: 4, startX: 580, startDX: 1, pegsHit: [5, 4, 7, 11]
  },
  // [45]
  {
    numPegHits: 6, startX: 331, startDX: 0, pegsHit: [1, 2, 3, 5, 7, 11]
  },
  // [46]
  {
    numPegHits: 6, startX: 471, startDX: 0, pegsHit: [2, 1, 4, 7, 8, 10]
  },
  // [47]
  {
    numPegHits: 4, startX: 290, startDX: 0, pegsHit: [1, 7, 9, 10]
  },
  // [48]
  {
    numPegHits: 4, startX: 600, startDX: 1, pegsHit: [5, 4, 10, 8]
  },
  // [49]
  {
    numPegHits: 5, startX: 495, startDX: 1, pegsHit: [2, 6, 4, 7, 9]
  },
  // [50]
  {
    numPegHits: 5, startX: 785, startDX: 0, pegsHit: [3, 2, 5, 8, 10]
  },
  // [51]
  {
    numPegHits: 5, startX: 650, startDX: 0, pegsHit: [5, 4, 10, 8, 13]
  },
  // [52]
  {
    numPegHits: 6, startX: 739, startDX: 0, pegsHit: [3, 2, 5, 7, 10, 12]
  },
  // [53]
  {
    numPegHits: 7, startX: 294, startDX: 1, pegsHit: [1, 2, 3, 5, 9, 6, 11]
  },
  // [54]
  {
    numPegHits: 4, startX: 425, startDX: 0, pegsHit: [4, 10, 8, 13]
  },
  // [55]
  {
    numPegHits: 8, startX: 683, startDX: 1, pegsHit: [3, 4, 7, 6, 9, 10, 12, 11]
  },
  // [56]
  {
    numPegHits: 6, startX: 375, startDX: 1, pegsHit: [4, 5, 9, 6, 11, 12]
  },
  // [57]
  {
    numPegHits: 6, startX: 525, startDX: 0, pegsHit: [2, 1, 4, 6, 7, 9]
  },
  // [58]
  {
    numPegHits: 8, startX: 474, startDX: 0, pegsHit: [2, 1, 4, 7, 5, 8, 10, 12]
  },
  // [59]
  {
    numPegHits: 8, startX: 492, startDX: 1, pegsHit: [2, 1, 4, 7, 6, 9, 10, 12]
  },
  // [60]
  {
    numPegHits: 8, startX: 473, startDX: 0, pegsHit: [2, 1, 4, 5, 9, 6, 10, 12]
  },
  // [61]
  {
    numPegHits: 6, startX: 617, startDX: 1, pegsHit: [5, 7, 8, 10, 9, 12]
  },
  // [62]
  {
    numPegHits: 4, startX: 599, startDX: 1, pegsHit: [5, 4, 10, 8]
  },
  // [63]
  {
    numPegHits: 4, startX: 589, startDX: 1, pegsHit: [5, 4, 7, 10]
  },
  // [64]
  {
    numPegHits: 5, startX: 418, startDX: 0, pegsHit: [4, 7, 8, 10, 12]
  },
  // [65]
  {
    numPegHits: 5, startX: 569, startDX: 1, pegsHit: [2, 3, 5, 7, 9]
  },
  // [66]
  {
    numPegHits: 6, startX: 525, startDX: 0, pegsHit: [2, 1, 4, 6, 7, 9]
  },
  // [67]
  {
    numPegHits: 4, startX: 589, startDX: 1, pegsHit: [5, 4, 7, 10]
  },
  // [68]
  {
    numPegHits: 6, startX: 446, startDX: 0, pegsHit: [4, 5, 7, 10, 9, 12]
  },
  // [69]
  {
    numPegHits: 6, startX: 737, startDX: 0, pegsHit: [3, 2, 5, 7, 6, 9]
  },
  // [70]
  {
    numPegHits: 6, startX: 563, startDX: 1, pegsHit: [2, 3, 5, 8, 10, 12]
  },
  // [71]
  {
    numPegHits: 5, startX: 757, startDX: 1, pegsHit: [3, 7, 5, 8, 10]
  },
  // [72]
  {
    numPegHits: 9, startX: 279, startDX: 0, pegsHit: [1, 4, 7, 5, 10, 9, 6, 12, 13]
  },
  // [73]
  {
    numPegHits: 4, startX: 362, startDX: 1, pegsHit: [4, 10, 8, 13]
  },
  // [74]
  {
    numPegHits: 6, startX: 428, startDX: 1, pegsHit: [2, 1, 4, 7, 5, 13]
  },
  // [75]
  {
    numPegHits: 5, startX: 741, startDX: 0, pegsHit: [3, 2, 8, 7, 10]
  },
  // [76]
  {
    numPegHits: 4, startX: 291, startDX: 1, pegsHit: [1, 2, 3, 9]
  },
  // [77]
  {
    numPegHits: 5, startX: 569, startDX: 1, pegsHit: [2, 3, 5, 7, 9]
  },
  // [78]
  {
    numPegHits: 4, startX: 589, startDX: 1, pegsHit: [5, 4, 7, 10]
  },
  // [79]
  {
    numPegHits: 6, startX: 310, startDX: 1, pegsHit: [1, 5, 9, 6, 10, 12]
  },
  // [80]
  {
    numPegHits: 6, startX: 444, startDX: 1, pegsHit: [2, 1, 4, 7, 9, 6]
  },
  // [81]
  {
    numPegHits: 8, startX: 322, startDX: 0, pegsHit: [1, 3, 7, 4, 6, 9, 10, 5]
  },
  // [82]
  {
    numPegHits: 6, startX: 435, startDX: 0, pegsHit: [4, 5, 7, 6, 9, 10]
  },
  // [83]
  {
    numPegHits: 5, startX: 582, startDX: 1, pegsHit: [5, 4, 7, 6, 9]
  },
  // [84]
  {
    numPegHits: 7, startX: 407, startDX: 1, pegsHit: [4, 5, 7, 6, 9, 10, 8]
  },
  // [85]
  {
    numPegHits: 8, startX: 353, startDX: 0, pegsHit: [1, 5, 9, 6, 11, 12, 10, 13]
  },
  // [86]
  {
    numPegHits: 6, startX: 384, startDX: 1, pegsHit: [4, 5, 7, 10, 8, 13]
  },
  // [87]
  {
    numPegHits: 8, startX: 607, startDX: 0, pegsHit: [2, 3, 5, 4, 10, 8, 9, 12]
  },
  // [88]
  {
    numPegHits: 6, startX: 784, startDX: 0, pegsHit: [3, 2, 5, 4, 7, 13]
  },
  // [89]
  {
    numPegHits: 4, startX: 355, startDX: 1, pegsHit: [4, 6, 7, 9]
  },
  // [90]
  {
    numPegHits: 6, startX: 293, startDX: 0, pegsHit: [1, 2, 4, 7, 6, 9]
  },
  // [91]
  {
    numPegHits: 4, startX: 655, startDX: 0, pegsHit: [5, 9, 6, 11]
  },
  // [92]
  {
    numPegHits: 4, startX: 485, startDX: 1, pegsHit: [2, 6, 4, 9]
  },
  // [93]
  {
    numPegHits: 6, startX: 293, startDX: 0, pegsHit: [1, 2, 4, 7, 6, 9]
  },
  // [94]
  {
    numPegHits: 9, startX: 423, startDX: 1, pegsHit: [2, 1, 4, 7, 5, 8, 10, 12, 11]
  },
  // [95]
  {
    numPegHits: 9, startX: 423, startDX: 1, pegsHit: [2, 1, 4, 7, 5, 8, 10, 12, 11]
  },
  // [96]
  {
    numPegHits: 5, startX: 418, startDX: 0, pegsHit: [4, 7, 8, 10, 12]
  },
  // [97]
  {
    numPegHits: 6, startX: 435, startDX: 1, pegsHit: [2, 1, 4, 10, 8, 13]
  },
  // [98]
  {
    numPegHits: 6, startX: 625, startDX: 0, pegsHit: [5, 4, 2, 7, 10, 12]
  },
  // [99]
  {
    numPegHits: 5, startX: 430, startDX: 0, pegsHit: [4, 5, 9, 6, 11]
  }
];
