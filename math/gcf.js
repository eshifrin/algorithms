const assert = require('../helpers').assert;

const gcf = (n1, n2) => {
  if (!n1 || !n2) {
    return undefined;
  }

  let num1 = Math.abs(n1);
  let num2 = Math.abs(n2);
  let big = Math.max(num1, num2);
  let small = Math.min(num1, num2)

  let mod = big % small;
  if (mod === 0) {
    return small;
  } else {
    return gcf(small, mod);
  }

}

assert('negatives work', 2, gcf(-16, 14));
assert('handles zero', undefined, gcf(-16, 0));
assert('test 1', 8, gcf(16, 8));
assert('test 2', 250, gcf(10000, 750));
assert('test 3', 33, gcf(99, 66));
