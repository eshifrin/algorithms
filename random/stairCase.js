//--------------------------------SETUP---------------------------------------//

/*
return a staircase of spaces and hashmarks

n = 2
 #
##


n = 6
     *
    **
   ***
  **** 
 *****
******
*/

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------FUNCTIONS---------------------------------------//

function stairCase(n) {
  let nextLine = [];
  let stairs = '';

  for (let i = 0; i < n; i++) {
      nextLine.push(' ');
  }

  for (let i = n - 1; i >=0; i--) {
      nextLine[i] = '#';
      stairs += nextLine.join('') + '\n'; 
  }

  return stairs.slice(0, stairs.length - 1);
}

//--------------------------------TEST---------------------------------------//

const sc2 = ' #\n##';
const sc6 = '     #\n    ##\n   ###\n  ####\n #####\n######';

assert('zero hashes', '', stairCase(0));
assert('two hashes', sc2, stairCase(2));
assert('six hashes', sc6, stairCase(6));
