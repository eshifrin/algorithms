// return if a board is valid
const assert = require('../helpers.js').assert;



const isValidSudoku = function(board) {
  const rows = {};
  const cols = {};
  const boxes = {};

  const isValidSpot = (obj, idx, val) => {
    obj[idx] = obj[idx] || new Set();
    
    if (!obj[idx].has(val)) {
        obj[idx].add(val);
        return true;
    } else {
        return false;
    }
  }


  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      let val = board[r][c];
      
      if (val !== '.') {
          let b = Math.floor(r / 3) * 3 + Math.floor(c / 3);
          
          if (!isValidSpot(rows, r, val) ||
              !isValidSpot(cols, c, val) ||
              !isValidSpot(boxes, b, val)) {
              return false;        
          }
      }
        
    }
  }

  return true;
};


const boardCreator = (strArr) => {
    return strArr.map(str => str.split(''))
}


const b1 = ["287654321","2........","3........","4........","5........","6........","7........","8........","9........"]
const b2 = ["287654321",".........","3........","4........","5........","6........","7........","8........","9........"]
const b3 = ["........",".........",".........",".........",".........",".........",".........",".........","........."]

assert('1 finds col conflicts', false, isValidSudoku(boardCreator(b1)))
assert('2 finds row conflicts', false, isValidSudoku(boardCreator(b2)))
assert('3 valid board passes', true, isValidSudoku(boardCreator(b3)))


