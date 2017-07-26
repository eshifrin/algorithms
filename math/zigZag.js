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
const { assert } = require('../helpers.js');

// --------------------------------FUNCTIONS---------------------------------------//

function test(a, b) {
  return a + b
}
test(5, 4)

// const zigZag = (s, numRows = 1) => {
//   if (numRows <= 1) {
//     return s;
//   }

//   let zigged = '';

//   // the longest time it will take to get back to any row (e.g first and last)
//   // is 2 * numRows - 2 
//   // because it will take numRows to traverse vertically and numRows diagonally
//   // however you have to subtract 1 for the overlap and 1 for the initial number
//   // e.g. if i occur every 3 times my next occurance = current + 3 - 1

//   // traverse each row
//   for (let r = 0; r < numRows; r++) {

//     // find all the letters in that row
//     for (let idx = r; idx < s.length; idx += (numRows * 2) - 2) {
//       zigged += s[idx];

//       if (r > 0 && r < numRows - 1) {
//         const next = idx + (numRows - r) * 2 - 2;
//         if (next < numRows) {
//           zigged += s[next];
//         }
//       }
//     }
//   }

//   return zigged;
// };

// zigZag('PAYPALISHIRING', 3)

// --------------------------------TESTING---------------------------------------//
// assert('returns single string as is', 'hello', zigZag('hello', 1));
// assert('returns null string as is', '', zigZag('', 1));
// assert('returns double string correctly', 'acegbdf', zigZag('abcdefg', 2));
// assert('converts paypal is hiring correctly', 'PAHNAPLSIIGYIR', zigZag('PAYPALISHIRING', 3));
