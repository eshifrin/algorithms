//--------------------------------SETUP---------------------------------------//

const singleDepth = ['apple', 'orange', ['banana', 'banana'], 'pear', 'pear', ['peach']];
//request(arr, k) should find the kth string in the arr and return the enclosing element
//e.g. singledepth 4,  the 2nd banana is the 4th string, the enclosing element is ['banana', 'banana']
const multipleDepth = [['apple', ['apple']], 'orange', [[['banana', 'banana']]], 'pear', 'pear', ['peach']];

//--------------------------------FUNCTIONS---------------------------------------//

const mapper = (arr, start = null) => {
  return arr.reduce((accum, el, idx) => {
    let index = start === null ? idx : start;
    Array.isArray(el) ? accum = accum.concat(mapper(el, index)) : accum.push(index);
    return accum;
  }, []);
};

const requester = (arr) => {
  let map = mapper(arr);
  return (k) => arr[map[k]];
}

//--------------------------------TESTING---------------------------------------//
const assert = require('../helpers.js').assert;
assert('mapper', [0, 1, 1, 2, 3], mapper([1,[2,3],4,5]));

const singleMapper = requester(singleDepth);
assert('single 0', singleDepth[0], singleMapper(0));
assert('single 2', singleDepth[2], singleMapper(3));
assert('single 5', singleDepth[5], singleMapper(6));

const doubleMapper = requester(multipleDepth);
assert('double 0', multipleDepth[2], doubleMapper(3));
assert('double 2', multipleDepth[3], doubleMapper(6));
