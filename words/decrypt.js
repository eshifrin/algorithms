//--------------------------------SETUP---------------------------------------//

/*

Convert every letter to its ASCII value. 
Add 1 to the first letter, and for every letter from the second to the last, 
add to it the value of the previous letter. 

Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. 
Convert the values back to letters.

*/

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}



const encode = (str) => {

  if (!str) {
    return '';
  }

  let newString = '';

  let additive = str[0] === 'z' ? 97 : str[0].charCodeAt() + 1;
  newString += String.fromCharCode(additive);
  let n;

  for (let i = 1; i < str.length; i++) {
    additive += str[i].charCodeAt();
    n = additive;
    while (n > 122) {
      n -= 26;
    }
    newString += String.fromCharCode(n);
  }

  return newString;
}

//--------------------------------FUNCTIONS---------------------------------------//


const decode = (str) => {
  if (!str) {
    return '';
  }

  let originalString = '';

  let additive = str[0].charCodeAt();
  originalString += str[0] === 'a' ? 'z' : String.fromCharCode(additive - 1);
  let n;


  for (let i = 1; i < str.length; i++) {
    n = str[i].charCodeAt() - additive;
    while (n < 97) {
      steps++;
      n += 26;
    }

    originalString += String.fromCharCode(n);
    additive += n;
  }

  return originalString;
}

//--------------------------------TEST---------------------------------------//
// assert('empty string', '', decode(''));
// assert('provided example 1', 'crime', decode('dnotq'));
// assert('provided example 2', 'encyclopedia', decode('flgxswdliefy'));
// assert('zs and as', 'zebra', decode('axrbu'));





