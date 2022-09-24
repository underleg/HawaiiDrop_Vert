
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
    numPegHits: 9, startX: 771, startDX: 0, pegsHit: [3, 2, 1, 7, 5, 9, 12, 13, 10]
  },
  // [1]
  {
    numPegHits: 6, startX: 429, startDX: 1, pegsHit: [2, 1, 4, 5, 7, 6]
  },
  // [2]
  {
    numPegHits: 4, startX: 454, startDX: 0, pegsHit: [4, 5, 7, 6]
  },
  // [3]
  {
    numPegHits: 7, startX: 656, startDX: 0, pegsHit: [5, 7, 4, 9, 10, 8, 12]
  },
  // [4]
  {
    numPegHits: 4, startX: 620, startDX: 0, pegsHit: [5, 4, 7, 9]
  },
  // [5]
  {
    numPegHits: 5, startX: 441, startDX: 0, pegsHit: [4, 5, 7, 8, 10]
  },
  // [6]
  {
    numPegHits: 4, startX: 316, startDX: 1, pegsHit: [1, 2, 4, 6]
  },
  // [7]
  {
    numPegHits: 6, startX: 635, startDX: 0, pegsHit: [5, 4, 7, 8, 10, 9]
  },
  // [8]
  {
    numPegHits: 4, startX: 364, startDX: 1, pegsHit: [4, 7, 8, 10]
  },
  // [9]
  {
    numPegHits: 4, startX: 492, startDX: 1, pegsHit: [2, 1, 4, 5]
  },
  // [10]
  {
    numPegHits: 7, startX: 640, startDX: 0, pegsHit: [5, 4, 7, 8, 10, 9, 6]
  },
  // [11]
  {
    numPegHits: 5, startX: 323, startDX: 0, pegsHit: [1, 3, 7, 4, 11]
  },
  // [12]
  {
    numPegHits: 4, startX: 622, startDX: 0, pegsHit: [5, 4, 7, 10]
  },
  // [13]
  {
    numPegHits: 7, startX: 510, startDX: 1, pegsHit: [2, 3, 5, 8, 10, 7, 9]
  },
  // [14]
  {
    numPegHits: 7, startX: 732, startDX: 0, pegsHit: [3, 2, 5, 7, 4, 9, 12]
  },
  // [15]
  {
    numPegHits: 5, startX: 350, startDX: 0, pegsHit: [1, 2, 4, 5, 11]
  },
  // [16]
  {
    numPegHits: 4, startX: 462, startDX: 0, pegsHit: [4, 5, 2, 8]
  },
  // [17]
  {
    numPegHits: 6, startX: 372, startDX: 1, pegsHit: [4, 7, 9, 6, 11, 12]
  },
  // [18]
  {
    numPegHits: 7, startX: 310, startDX: 1, pegsHit: [1, 2, 4, 7, 8, 10, 9]
  },
  // [19]
  {
    numPegHits: 6, startX: 512, startDX: 1, pegsHit: [2, 3, 7, 4, 10, 12]
  },
  // [20]
  {
    numPegHits: 4, startX: 299, startDX: 1, pegsHit: [1, 2, 5, 8]
  },
  // [21]
  {
    numPegHits: 7, startX: 640, startDX: 0, pegsHit: [5, 4, 7, 8, 10, 9, 6]
  },
  // [22]
  {
    numPegHits: 4, startX: 629, startDX: 0, pegsHit: [5, 4, 10, 8]
  },
  // [23]
  {
    numPegHits: 9, startX: 705, startDX: 1, pegsHit: [3, 2, 1, 4, 7, 6, 9, 10, 13]
  },
  // [24]
  {
    numPegHits: 6, startX: 397, startDX: 1, pegsHit: [4, 5, 9, 6, 10, 12]
  },
  // [25]
  {
    numPegHits: 5, startX: 657, startDX: 0, pegsHit: [5, 7, 9, 6, 11]
  },
  // [26]
  {
    numPegHits: 6, startX: 301, startDX: 0, pegsHit: [1, 2, 4, 6, 9, 11]
  },
  // [27]
  {
    numPegHits: 6, startX: 524, startDX: 0, pegsHit: [2, 1, 4, 5, 3, 8]
  },
  // [28]
  {
    numPegHits: 4, startX: 290, startDX: 0, pegsHit: [1, 7, 5, 10]
  },
  // [29]
  {
    numPegHits: 5, startX: 441, startDX: 0, pegsHit: [4, 5, 7, 8, 10]
  },
  // [30]
  {
    numPegHits: 5, startX: 441, startDX: 0, pegsHit: [4, 5, 7, 8, 10]
  },
  // [31]
  {
    numPegHits: 7, startX: 731, startDX: 1, pegsHit: [3, 2, 5, 4, 10, 8, 12]
  },
  // [32]
  {
    numPegHits: 8, startX: 423, startDX: 1, pegsHit: [2, 1, 4, 5, 3, 7, 6, 9]
  },
  // [33]
  {
    numPegHits: 5, startX: 657, startDX: 0, pegsHit: [5, 7, 9, 6, 11]
  },
  // [34]
  {
    numPegHits: 4, startX: 534, startDX: 0, pegsHit: [2, 4, 5, 7]
  },
  // [35]
  {
    numPegHits: 4, startX: 753, startDX: 0, pegsHit: [3, 1, 7, 8]
  },
  // [36]
  {
    numPegHits: 4, startX: 330, startDX: 0, pegsHit: [1, 3, 7, 6]
  },
  // [37]
  {
    numPegHits: 5, startX: 543, startDX: 0, pegsHit: [2, 3, 5, 4, 1]
  },
  // [38]
  {
    numPegHits: 5, startX: 594, startDX: 1, pegsHit: [5, 4, 10, 8, 13]
  },
  // [39]
  {
    numPegHits: 4, startX: 282, startDX: 1, pegsHit: [1, 3, 9, 6]
  },
  // [40]
  {
    numPegHits: 8, startX: 612, startDX: 0, pegsHit: [2, 3, 5, 4, 7, 8, 10, 9]
  },
  // [41]
  {
    numPegHits: 9, startX: 710, startDX: 1, pegsHit: [3, 1, 4, 2, 8, 10, 9, 12, 13]
  },
  // [42]
  {
    numPegHits: 6, startX: 524, startDX: 0, pegsHit: [2, 1, 4, 5, 3, 8]
  },
  // [43]
  {
    numPegHits: 4, startX: 596, startDX: 1, pegsHit: [5, 4, 10, 8]
  },
  // [44]
  {
    numPegHits: 7, startX: 292, startDX: 1, pegsHit: [1, 3, 7, 5, 8, 10, 12]
  },
  // [45]
  {
    numPegHits: 7, startX: 424, startDX: 1, pegsHit: [2, 1, 4, 5, 3, 7, 9]
  },
  // [46]
  {
    numPegHits: 7, startX: 436, startDX: 1, pegsHit: [2, 1, 4, 6, 7, 5, 10]
  },
  // [47]
  {
    numPegHits: 5, startX: 734, startDX: 0, pegsHit: [3, 2, 4, 5, 8]
  },
  // [48]
  {
    numPegHits: 5, startX: 435, startDX: 0, pegsHit: [4, 5, 7, 6, 12]
  },
  // [49]
  {
    numPegHits: 4, startX: 534, startDX: 0, pegsHit: [2, 4, 5, 7]
  },
  // [50]
  {
    numPegHits: 7, startX: 289, startDX: 0, pegsHit: [1, 4, 7, 9, 12, 10, 13]
  },
  // [51]
  {
    numPegHits: 4, startX: 417, startDX: 0, pegsHit: [4, 7, 5, 10]
  },
  // [52]
  {
    numPegHits: 4, startX: 508, startDX: 1, pegsHit: [2, 8, 5, 10]
  },
  // [53]
  {
    numPegHits: 4, startX: 627, startDX: 0, pegsHit: [5, 4, 7, 11]
  },
  // [54]
  {
    numPegHits: 4, startX: 750, startDX: 0, pegsHit: [3, 1, 7, 8]
  },
  // [55]
  {
    numPegHits: 9, startX: 309, startDX: 0, pegsHit: [1, 2, 3, 7, 4, 10, 12, 11, 9]
  },
  // [56]
  {
    numPegHits: 4, startX: 500, startDX: 1, pegsHit: [2, 3, 5, 4]
  },
  // [57]
  {
    numPegHits: 5, startX: 470, startDX: 0, pegsHit: [2, 1, 4, 5, 8]
  },
  // [58]
  {
    numPegHits: 5, startX: 567, startDX: 1, pegsHit: [2, 3, 5, 7, 6]
  },
  // [59]
  {
    numPegHits: 4, startX: 589, startDX: 1, pegsHit: [5, 4, 7, 8]
  },
  // [60]
  {
    numPegHits: 4, startX: 610, startDX: 1, pegsHit: [5, 9, 6, 11]
  },
  // [61]
  {
    numPegHits: 7, startX: 685, startDX: 1, pegsHit: [3, 2, 5, 4, 8, 10, 7]
  },
  // [62]
  {
    numPegHits: 4, startX: 437, startDX: 0, pegsHit: [4, 5, 7, 6]
  },
  // [63]
  {
    numPegHits: 7, startX: 292, startDX: 1, pegsHit: [1, 3, 7, 5, 8, 10, 12]
  },
  // [64]
  {
    numPegHits: 4, startX: 306, startDX: 1, pegsHit: [1, 2, 5, 8]
  },
  // [65]
  {
    numPegHits: 5, startX: 607, startDX: 0, pegsHit: [2, 3, 5, 4, 1]
  },
  // [66]
  {
    numPegHits: 6, startX: 452, startDX: 0, pegsHit: [4, 5, 7, 9, 12, 11]
  },
  // [67]
  {
    numPegHits: 5, startX: 537, startDX: 0, pegsHit: [2, 1, 4, 5, 3]
  },
  // [68]
  {
    numPegHits: 7, startX: 735, startDX: 0, pegsHit: [3, 2, 1, 4, 5, 7, 9]
  },
  // [69]
  {
    numPegHits: 5, startX: 734, startDX: 0, pegsHit: [3, 2, 4, 5, 8]
  },
  // [70]
  {
    numPegHits: 5, startX: 581, startDX: 1, pegsHit: [5, 4, 7, 11, 12]
  },
  // [71]
  {
    numPegHits: 8, startX: 320, startDX: 1, pegsHit: [1, 2, 4, 5, 7, 6, 9, 10]
  },
  // [72]
  {
    numPegHits: 7, startX: 469, startDX: 0, pegsHit: [2, 1, 4, 5, 7, 9, 6]
  },
  // [73]
  {
    numPegHits: 4, startX: 595, startDX: 1, pegsHit: [5, 4, 10, 8]
  },
  // [74]
  {
    numPegHits: 4, startX: 380, startDX: 1, pegsHit: [4, 5, 9, 6]
  },
  // [75]
  {
    numPegHits: 4, startX: 492, startDX: 1, pegsHit: [2, 1, 4, 5]
  },
  // [76]
  {
    numPegHits: 7, startX: 729, startDX: 1, pegsHit: [3, 2, 1, 4, 5, 6, 9]
  },
  // [77]
  {
    numPegHits: 4, startX: 662, startDX: 0, pegsHit: [5, 9, 6, 10]
  },
  // [78]
  {
    numPegHits: 5, startX: 475, startDX: 0, pegsHit: [2, 1, 4, 5, 7]
  },
  // [79]
  {
    numPegHits: 6, startX: 415, startDX: 0, pegsHit: [4, 10, 9, 12, 13, 8]
  },
  // [80]
  {
    numPegHits: 6, startX: 364, startDX: 0, pegsHit: [1, 2, 4, 5, 7, 11]
  },
  // [81]
  {
    numPegHits: 5, startX: 580, startDX: 1, pegsHit: [5, 4, 7, 6, 9]
  },
  // [82]
  {
    numPegHits: 5, startX: 585, startDX: 1, pegsHit: [5, 4, 7, 8, 10]
  },
  // [83]
  {
    numPegHits: 4, startX: 596, startDX: 1, pegsHit: [5, 4, 10, 8]
  },
  // [84]
  {
    numPegHits: 5, startX: 581, startDX: 1, pegsHit: [5, 4, 7, 11, 12]
  },
  // [85]
  {
    numPegHits: 4, startX: 671, startDX: 1, pegsHit: [3, 4, 7, 8]
  },
  // [86]
  {
    numPegHits: 5, startX: 338, startDX: 0, pegsHit: [1, 2, 5, 3, 8]
  },
  // [87]
  {
    numPegHits: 5, startX: 688, startDX: 1, pegsHit: [3, 2, 5, 7, 8]
  },
  // [88]
  {
    numPegHits: 5, startX: 695, startDX: 1, pegsHit: [3, 2, 5, 9, 12]
  },
  // [89]
  {
    numPegHits: 4, startX: 282, startDX: 1, pegsHit: [1, 3, 9, 6]
  },
  // [90]
  {
    numPegHits: 8, startX: 614, startDX: 0, pegsHit: [2, 3, 5, 4, 7, 8, 10, 9]
  },
  // [91]
  {
    numPegHits: 4, startX: 671, startDX: 1, pegsHit: [3, 4, 7, 8]
  },
  // [92]
  {
    numPegHits: 7, startX: 345, startDX: 0, pegsHit: [1, 2, 3, 5, 4, 7, 10]
  },
  // [93]
  {
    numPegHits: 6, startX: 690, startDX: 1, pegsHit: [3, 2, 5, 4, 7, 13]
  },
  // [94]
  {
    numPegHits: 9, startX: 710, startDX: 1, pegsHit: [3, 1, 4, 2, 8, 10, 9, 12, 13]
  },
  // [95]
  {
    numPegHits: 6, startX: 690, startDX: 1, pegsHit: [3, 2, 5, 4, 7, 13]
  },
  // [96]
  {
    numPegHits: 4, startX: 644, startDX: 0, pegsHit: [5, 4, 7, 8]
  },
  // [97]
  {
    numPegHits: 7, startX: 345, startDX: 0, pegsHit: [1, 2, 3, 5, 4, 7, 10]
  },
  // [98]
  {
    numPegHits: 4, startX: 437, startDX: 0, pegsHit: [4, 5, 7, 6]
  },
  // [99]
  {
    numPegHits: 8, startX: 293, startDX: 0, pegsHit: [1, 2, 4, 7, 6, 9, 10, 8]
  }
];
