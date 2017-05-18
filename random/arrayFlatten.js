//--------------------------------SETUP---------------------------------------//

//flatten a nested array

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------FUNCTIONS---------------------------------------//

const flatten = (arr) => {
  let flattened = [];

  arr.forEach(el => {
    if (Array.isArray(el)) {
      flattened = flattened.concat(flatten(el));
    } else {
      flattened.push(el);      
    }
  });

  return flattened;
}

//--------------------------------TEST---------------------------------------//

assert('no inputs', [], flatten([]));
assert('as is', [6,5,4,3,21], flatten([6,5,4,3,21]));
assert('multiple  nested', [5], flatten([[[[[[[5]]]]]]]));
assert('many staggered nested', [1,2,3,4,5], flatten([[1,2],[3,[4,[5]]]]));

