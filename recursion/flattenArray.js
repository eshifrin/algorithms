
//--------------------------------SETUP---------------------------------------//
//--------------------------------FUNCTIONS---------------------------------------//

const flattenArray = (arr) => {
  return arr.reduce((accum, el) => {
    Array.isArray(el) ? accum = accum.concat(flattenArray(el)) : accum.push(el);
    return accum;
  }, []);
};

function flatten2_JamesWilkins(input) {
  var i, placeHolder = [input], lastIndex = [-1], out = [];
  while (placeHolder.length) {
      input = placeHolder.pop();
      i = lastIndex.pop() + 1;
      for (; i < input.length; ++i) {
          if (input[i] instanceof Array) {
              placeHolder.push(input);
              lastIndex.push(i);
              input = input[i];
              i = -1;
          } else out.push(input[i]);
      }
  }
  return out;
}

console.log(flatten2_JamesWilkins([1, [[2], 3], 4, [5]]))




//--------------------------------TESTING---------------------------------------//

const assert = require('../helpers.js').assert;

// assert('basic', [1,2,3,4,5], flattenArray([1, [[2], 3], 4, [5]]));
// assert('as is', [1,2,3,4,5], flattenArray([1, 2, 3, 4, 5]));

