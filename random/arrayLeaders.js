//--------------------------------SETUP---------------------------------------//

// array leaders - return the array of elements that are larger than all the elements to its right


const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------FUNCTIONS---------------------------------------//

function arrayLeaders(arr) {
  let runningMax = -Infinity;
  let leaders = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > runningMax) {
      leaders.push(arr[i]);
      runningMax = arr[i];
    }
  }

  return leaders;  
}

//--------------------------------TEST---------------------------------------//

// assert('no inputs', [], arrayLeaders([]));
assert('all equal', [5], arrayLeaders([5, 5, 5, 5, 5]));
assert('provided test 1', [27, 54, 98], arrayLeaders([98, 23, 54, 12, 20, 7, 27]));
assert('checks greater than explicity', [85], arrayLeaders([85, 24, 85]));

