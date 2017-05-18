//--------------------------------SETUP---------------------------------------//

//create a binary search tree out of a sorted array
//base case: start < end, return null
//create a  new node with the middle value floor(end + start / 2)
  //set the nodes left = recursive call on createBST on the values to the left of middle
  //set nodes right = recursive call on createBST on the values to the right of middle


class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${JSON.stringify(expected)} | got ${JSON.stringify(processed)}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//


function hasAllLetters(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let n = Math.pow(2, str[i].toLowerCase().charCodeAt() - 97);
      sum = sum | n;

      if (sum === 67108863) {
        return true;
      }      
    }
  }

  return false;
}

//--------------------------------TESTING---------------------------------------//


assert('does have it', true, hasAllLetters('We promptly judged antique ivory buckles for the next prize'));
assert('doesnt have it', false, hasAllLetters('We promptly judged antique ivory buckles for the prize'));

