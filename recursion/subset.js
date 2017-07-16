// --------------------------------SETUP---------------------------------------//
// find all subsets that sum to target
const { assert } = require('../helpers.js');

// --------------------------------FUNCTIONS---------------------------------------//

const subsetSum = (numbers, target, withRepetition = false) => {
  const result = [];
  const incrementalIndex = withRepetition ? 0 : 1;

  const walk = (startIdx, sum = 0, set = []) => {
    if (sum === target) {
      result.push(set.slice());
      return undefined;
    }

    if (sum > target) {
      return undefined;
    }

    for (let idx = startIdx; idx < numbers.length; idx += 1) {
      set.push(numbers[idx]);
      walk(idx + incrementalIndex, sum + numbers[idx], set);
      set.pop();
    }

    return undefined;
  };

  walk(0);
  return result;
};

// --------------------------------TESTING---------------------------------------//
// ways to create 7 without repetition
const without = [[1, 2, 4], [2, 5], [1, 6], [3, 4], [7]];
assert('sample without', without.sort(), subsetSum([1, 2, 3, 4, 5, 6, 7], 7));

const withRepetition = [[1, 1, 1, 1], [1, 1, 2], [2, 2], [1, 3]];
assert('sample with', withRepetition.sort(), subsetSum([1, 2, 3], 4, true));
