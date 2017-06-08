//return the maximum depth of an array where there is a nonempty value

const arrayDepth = (arr, level = 1) => { 
  let maxDepth = 0;

  arr.forEach(el => {
    let elementDepth = Array.isArray(el) ? arrayDepth(el, level + 1) : level;
    maxDepth = Math.max(elementDepth, maxDepth);
  });

  return maxDepth;
};

let assert = require('../helpers').assert;
assert('handles empty array', 0, arrayDepth([]));
assert('handles nested empty arrays', 0, arrayDepth([[], [[[]]], [[]]]));
assert('handles basic array', 1, arrayDepth([5, 4, 3, 2, 1]));
assert('handles basic with one nested empty array', 1, arrayDepth([5, 4, 3, [], 1]));
assert('handles numbers and strings with strings deeper', 2, arrayDepth([5, 4, 3, ['hello'], 1]));
assert('handles numbers and strings with numbers deeper', 2, arrayDepth(['hello', [2]]));
assert('handles very deep arrays', 5, arrayDepth([2, [3, [4]], [[4, [8, ['15']], 5]]]));

