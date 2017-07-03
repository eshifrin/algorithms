
//--------------------------------SETUP---------------------------------------//
//--------------------------------FUNCTIONS---------------------------------------//

const flattenArray = (arr) => {
  return arr.reduce((accum, el) => {
    Array.isArray(el) ? accum = accum.concat(flattenArray(el)) : accum.push(el);
    return accum;
  }, []);
};

//--------------------------------TESTING---------------------------------------//

const assert = require('../helpers.js').assert;

assert('basic', [1,2,3,4,5], flattenArray([1, [[2], 3], 4, [5]]));
assert('as is', [1,2,3,4,5], flattenArray([1, 2, 3, 4, 5]));

