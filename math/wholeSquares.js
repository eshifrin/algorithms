//--------------------------------SETUP---------------------------------------//

/* given a range A to B inclusive, find the count of #s in that range whose square root is an integer */

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------FUNCTIONS---------------------------------------//

function wholeSquares(A, B) {
  let num;
  let count = 0;

  if (B < 0) {
    return 0;
  } else if (A < 0) {
    num = 0;
  } else {
    num = Math.ceil(Math.sqrt(A));
  }

  while (num * num <= B) {
    count++;
    num++;
  }

  return count;
}

//--------------------------------TEST---------------------------------------//

console.log('\nwhole Squares')
assert('1 negatives return 0', 0, wholeSquares(-35, -25));
assert('2 negative A positive B works', 1, wholeSquares(-35, -0));
assert('3 provided sample', 3, wholeSquares(4, 17));
assert('4 0-100 is 11', 11, wholeSquares(0, 100));

