//--------------------------------SETUP---------------------------------------//

//return whether or not a string has every letter in the alphabet

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

