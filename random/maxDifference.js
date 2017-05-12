//--------------------------------SETUP---------------------------------------//

//maximum difference is largest difference between any a[i] and a[j] where i < j and a[i] < a[j]

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------SETUP---------------------------------------//

function maxDifference(a) {

    if (!a.length) {
        return -1;
    }
    
    let maxDiff = -1;
    let lowest = a[0];
    
    for (let i = 1; i < a.length; i++) {
        if (a[i] > lowest) {
            maxDiff = Math.max(maxDiff, a[i] - lowest)
        } else {
            lowest = a[i];
        }        
    }
    
    return maxDiff;    
}

//--------------------------------TEST---------------------------------------//

assert('no inputs', -1, maxDifference([]));
assert('all descending', -1, maxDifference([5, 4, 3, 2, 1]));
assert('provided test 1', 2, maxDifference([7, 9, 5, 6, 3, 2]));
assert('provided test 2', 8, maxDifference([2, 3, 10, 2, 4, 8, 1]));

