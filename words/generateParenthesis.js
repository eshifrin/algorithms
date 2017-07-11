//--------------------------------SETUP---------------------------------------//

// describe the problem
const { assert } = require('../helpers.js');

// given an integer, n, generate all combinations of parenthesis
// e.g. 2   ()(),  (())

//--------------------------------FUNCTIONS---------------------------------------//

const generateParenthesis = (n, open = n - 1, close = n, string = '(', combinations = []) => {
  if (!n) {
    return [];
  }

  if (!open && !close) {
    combinations.push(string);
    return undefined;
  }

  if (open) {
    generateParenthesis(n, open - 1, close, string + '(', combinations);
  }

  if (close > open) {
    generateParenthesis(n, open, close - 1, string + ')', combinations);
  }

  return combinations;
};

//--------------------------------TESTING---------------------------------------//
assert('none', [].sort(), generateParenthesis(0).sort());
assert('one', ['()'].sort(), generateParenthesis(1).sort());
assert('two', ['()()', '(())'].sort(), generateParenthesis(2).sort());
assert('three', ['()()()', '(()())', '((()))', '()(())', '(())()'].sort(), generateParenthesis(3).sort());

