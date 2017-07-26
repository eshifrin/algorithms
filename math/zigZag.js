// --------------------------------SETUP---------------------------------------//
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows 
// like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// describe the problem

// --------------------------------FUNCTIONS---------------------------------------//
const zigZag = (s, numRows = 1) => {
  if (numRows <= 1) {
    return s;
  }

  let zigged = '';

  // FORMULA FOR LARGE STEPS = idx + numRows * 2 - 2
  // the longest time it will take to get back to any row (e.g first and last)
  // is 2 * numRows - 2 (the incremental value in the inner for loop)
  // because it will take numRows to traverse vertically and numRows diagonally
  // however you have to subtract 1 for the overlap and 1 for the initial number
  // 1 for the initial #...e.g. if i occur every 3 times my next occurance = current + 3 - 1

  // FORMULA FOR INTERMEDIATE STEPS = idx + (numRows - row) * 2 - 2
  // similar rationale as for the big step except you have to adjust for how many rows
  // down we started at...
  // if we are in row 3 out of 5, it will take (5 - 3) steps to get 'down' and (5 - 3) steps
  // to get diagonally 'up'.  subtract 1 for the overlap and 1 for the starting position
  // also add in the index we started from...

  // traverse each row
  for (let r = 0; r < numRows; r++) {

    // find all the letters in that row
    for (let idx = r; idx < s.length; idx += (numRows * 2) - 2) {
      zigged += s[idx];

      // for rows not at the beginning or end
      if (r > 0 && r < numRows - 1) {
        const next = idx + (numRows - r) * 2 - 2;
        if (next < s.length) {
          zigged += s[next];
        }
      }
    }
  }

  return zigged;
};


// --------------------------------TESTING---------------------------------------//
const { assert } = require('../helpers.js');
assert('returns single string as is', 'hello', zigZag('hello', 1));
assert('returns null string as is', '', zigZag('', 1));
assert('returns double string correctly', 'acegbdf', zigZag('abcdefg', 2));
assert('converts paypal is hiring correctly', 'PAHNAPLSIIGYIR', zigZag('PAYPALISHIRING', 3));
