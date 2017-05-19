//https://discuss.leetcode.com/topic/21086/iterative-and-recursive-python
const assert = require('../helpers.js').assert;

const recursiveFactors = (n, i = 2, combination = [], combinations = []) => {
  while (i * i <= n) {
    if (n % i === 0) {
      combinations.push(combination.concat([i, n / i]));
      recursiveFactors(n / i, i, combination.concat(i), combinations);
    }

    i++;
  }

  return combinations;
}

assert('works on 16', [[2, 8],[2, 2, 4],[2, 2, 2, 2],[4, 4]], recursiveFactors(16));

/* start with the number and lowest divisor
      keep track of this path of divisors (combination = [])  and all combinations = []
        for each path we will need the remaining number (n), the lowest possible factor (i) and the path (combination)

        for i = i to sqrt(n)
          if n is divisible by i,   push i and n / i to the combination and add that to the combinations
                                    also recurse on  n = the remaining number = (n / i), the factor i, and the built up combination concatted with i

        start with n = 16   i= 2   combination = []     combinations = []
          16 is divisible by 2 8 times  so lets add [2, 8] to combinations
            lets also go down the path of  8 2  [2] to see if there's any breaking 8 down
              4 2 [2 ,2]  and lets add  [4, 2] to the combination and add [2, 2, 4] to the combinations
                lets go down the path of 4, 2 [2, 2] which will only add [2, 2, 2, 2] to the combinations - as soon as we hit 3, which is > sqrt of 4 we stop
            back down the stack to 8 3 (not divisible), then 8, 4 we stop
          back down the stack to 16, 3 not divisible and 16 ,4 which is and gets added    [4, 4]
            down to 4, 4 [4]  which wont fly since 4 > sqrt(4)
          back down to 16, 5, which exists and returns all the combinations (which have been collecting via closure) */



