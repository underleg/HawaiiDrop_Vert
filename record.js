////////////////////////////////////////////////////////////
// gravity = 0.5
// xbounce = 1.3
// ybounce = 1.5
// dxLim = 0.4
// magLim = 20
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

let ballRecords = [
  // [0]
  {
    numPegHits: 5, startX: 385, startDX: 1, pegsHit: [4, 5, 9, 7, 12]
  },
  // [1]
  {
    numPegHits: 6, startX: 339, startDX: 0, pegsHit: [4, 1, 6, 9, 11, 12]
  },
  // [2]
  {
    numPegHits: 5, startX: 564, startDX: 0, pegsHit: [2, 3, 5, 9, 7]
  },
  // [3]
  {
    numPegHits: 5, startX: 388, startDX: 1, pegsHit: [4, 5, 9, 12, 11]
  },
  // [4]
  {
    numPegHits: 5, startX: 611, startDX: 1, pegsHit: [5, 2, 7, 8, 10]
  },
  // [5]
  {
    numPegHits: 4, startX: 439, startDX: 0, pegsHit: [4, 5, 9, 7]
  },
  // [6]
  {
    numPegHits: 4, startX: 437, startDX: 0, pegsHit: [4, 5, 9, 7]
  },
  // [7]
  {
    numPegHits: 6, startX: 442, startDX: 1, pegsHit: [2, 1, 4, 7, 10, 8]
  },
  // [8]
  {
    numPegHits: 5, startX: 341, startDX: 0, pegsHit: [4, 1, 6, 9, 7]
  },
  // [9]
  {
    numPegHits: 5, startX: 482, startDX: 0, pegsHit: [2, 1, 4, 10, 8]
  },
  // [10]
  {
    numPegHits: 8, startX: 480, startDX: 1, pegsHit: [2, 1, 4, 7, 5, 10, 13, 12]
  },
  // [11]
  {
    numPegHits: 4, startX: 844, startDX: 0, pegsHit: [3, 7, 10, 8]
  },
  // [12]
  {
    numPegHits: 6, startX: 493, startDX: 1, pegsHit: [2, 1, 4, 7, 5, 13]
  },
  // [13]
  {
    numPegHits: 5, startX: 646, startDX: 1, pegsHit: [5, 7, 4, 12, 11]
  },
  // [14]
  {
    numPegHits: 7, startX: 596, startDX: 0, pegsHit: [2, 3, 5, 4, 7, 9, 6]
  },
  // [15]
  {
    numPegHits: 4, startX: 439, startDX: 0, pegsHit: [4, 5, 9, 7]
  },
  // [16]
  {
    numPegHits: 5, startX: 739, startDX: 0, pegsHit: [5, 3, 8, 10, 7]
  },
  // [17]
  {
    numPegHits: 4, startX: 590, startDX: 1, pegsHit: [5, 4, 7, 10]
  },
  // [18]
  {
    numPegHits: 4, startX: 626, startDX: 0, pegsHit: [5, 6, 9, 11]
  },
  // [19]
  {
    numPegHits: 5, startX: 756, startDX: 1, pegsHit: [3, 2, 8, 7, 10]
  },
  // [20]
  {
    numPegHits: 6, startX: 365, startDX: 1, pegsHit: [4, 2, 7, 6, 9, 11]
  },
  // [21]
  {
    numPegHits: 6, startX: 303, startDX: 1, pegsHit: [4, 1, 6, 10, 12, 13]
  },
  // [22]
  {
    numPegHits: 5, startX: 307, startDX: 1, pegsHit: [4, 1, 6, 10, 12]
  },
  // [23]
  {
    numPegHits: 5, startX: 612, startDX: 1, pegsHit: [5, 2, 7, 10, 8]
  },
  // [24]
  {
    numPegHits: 6, startX: 816, startDX: 1, pegsHit: [3, 5, 8, 7, 10, 13]
  },
  // [25]
  {
    numPegHits: 6, startX: 442, startDX: 1, pegsHit: [2, 1, 4, 7, 10, 8]
  },
  // [26]
  {
    numPegHits: 6, startX: 478, startDX: 1, pegsHit: [2, 1, 7, 5, 9, 6]
  },
  // [27]
  {
    numPegHits: 5, startX: 678, startDX: 0, pegsHit: [5, 2, 10, 9, 12]
  },
  // [28]
  {
    numPegHits: 6, startX: 645, startDX: 0, pegsHit: [5, 4, 7, 8, 12, 10]
  },
  // [29]
  {
    numPegHits: 6, startX: 790, startDX: 0, pegsHit: [3, 2, 5, 4, 7, 13]
  },
  // [30]
  {
    numPegHits: 5, startX: 305, startDX: 1, pegsHit: [4, 1, 6, 7, 9]
  },
  // [31]
  {
    numPegHits: 6, startX: 767, startDX: 1, pegsHit: [3, 2, 5, 4, 7, 10]
  },
  // [32]
  {
    numPegHits: 7, startX: 752, startDX: 1, pegsHit: [3, 2, 5, 4, 7, 12, 13]
  },
  // [33]
  {
    numPegHits: 5, startX: 615, startDX: 1, pegsHit: [5, 2, 7, 8, 10]
  },
  // [34]
  {
    numPegHits: 6, startX: 793, startDX: 1, pegsHit: [3, 2, 5, 4, 7, 11]
  },
  // [35]
  {
    numPegHits: 4, startX: 404, startDX: 0, pegsHit: [4, 2, 9, 10]
  },
  // [36]
  {
    numPegHits: 6, startX: 493, startDX: 1, pegsHit: [2, 1, 4, 7, 5, 13]
  },
  // [37]
  {
    numPegHits: 6, startX: 438, startDX: 1, pegsHit: [2, 1, 4, 7, 6, 9]
  },
  // [38]
  {
    numPegHits: 7, startX: 663, startDX: 0, pegsHit: [5, 2, 7, 8, 10, 9, 12]
  },
  // [39]
  {
    numPegHits: 5, startX: 739, startDX: 0, pegsHit: [5, 3, 8, 10, 7]
  },
  // [40]
  {
    numPegHits: 6, startX: 806, startDX: 1, pegsHit: [3, 5, 2, 7, 10, 8]
  },
  // [41]
  {
    numPegHits: 6, startX: 728, startDX: 0, pegsHit: [5, 3, 8, 7, 10, 12]
  },
  // [42]
  {
    numPegHits: 6, startX: 434, startDX: 0, pegsHit: [4, 5, 7, 6, 12, 9]
  },
  // [43]
  {
    numPegHits: 6, startX: 475, startDX: 1, pegsHit: [2, 1, 4, 10, 8, 13]
  },
  // [44]
  {
    numPegHits: 6, startX: 339, startDX: 0, pegsHit: [4, 1, 6, 9, 11, 12]
  },
  // [45]
  {
    numPegHits: 5, startX: 764, startDX: 1, pegsHit: [3, 2, 5, 8, 10]
  },
  // [46]
  {
    numPegHits: 7, startX: 794, startDX: 0, pegsHit: [3, 2, 5, 4, 7, 10, 12]
  },
  // [47]
  {
    numPegHits: 6, startX: 294, startDX: 0, pegsHit: [1, 2, 4, 5, 7, 9]
  },
  // [48]
  {
    numPegHits: 8, startX: 847, startDX: 0, pegsHit: [3, 5, 4, 2, 7, 10, 8, 13]
  },
  // [49]
  {
    numPegHits: 6, startX: 745, startDX: 1, pegsHit: [3, 2, 5, 4, 7, 10]
  }
];
