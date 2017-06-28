//--------------------------------SETUP---------------------------------------//
const helpers = require('../helpers');
const assert = helpers.assert;

// is one array a rotated version of another array
// 1 2 3 4 5    3 4 5 1 2   yes

//--------------------------------FUNCTIONS---------------------------------------//

//  naive implementation - combine all the strings in array1, 




const buildPreSuf = (sub) => {
  let preIdx = 0;
  let sufIdx = 1;
  let track = [0];

  while (sufIdx < sub.length) {
    while (sub[preIdx] === sub[sufIdx]) {
      track.push(preIdx + 1);
      preIdx++;
      sufIdx++;
    }

    if (preIdx === 0) {
      track.push(0);
      sufIdx++;
    } else {
      preIdx = track[preIdx - 1];
    }
  }

  return track;
}


const kmp = (sub, str) => {
  let track = buildPreSuf(sub);

  let subI = 0;
  let subLen = sub.length;

  let strI = 0;
  let strLen = str.length;


  while (strLen - strI >= subLen - subI) {
    if (subI === subLen) {
      return true;
    } else if (sub[subI] === str[strI]) {
      subI++;
      strI++;
    } else if (subI === 0) {
      strI++;
    } else {
      subI = track[subI - 1];
    }
  }

  return false;
}

const areRotatedArrays = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false;
  }

  return kmp(a1, a2.concat(a2));
}


//--------------------------------TESTS---------------------------------------//

(function testSuite() {
  let a = [1, 2, 3, 4, 5];
  let rotatedA = [2, 3, 4, 5, 1];
  let notRotatedA = [1, 2, 4, 5, 3];

  assert('detects rotations', true, areRotatedArrays(a, rotatedA));
  assert('detects non-rotations', false, areRotatedArrays(a, notRotatedA));
})()
