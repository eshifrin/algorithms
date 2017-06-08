//--------------------------------SETUP---------------------------------------//
const helpers = require('../helpers');
const assert = helpers.assert;

/* calculate a string using that includes these 4 operators * - + /
  the string has
  -explicit operators - no implied e.g. (3 * 4)(4 * 3)
  -only positive numbers no negative numbers no 3 * - 4
  -might or might not have spaces  3* 4 +  6/7*9
  -parenthesis - no need to check for matching
*/

//--------------------------------FUNCTIONS---------------------------------------//

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
};

Array.prototype.last = function() {
  return this[this.length - 1];
}

const isNumber = (n) => !isNaN(Number(n)) && n !== ' ';

const convertToRPN = (str) => {
  let precedence = {
    '^' : 4,
    '*' : 3,
    '/' : 3,
    '+' : 2,
    '-' : 2
  }

  let stack = [];
  let operatorStack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === ' ') {
      continue;
    }
    else if (isNumber(char)) {
      if (isNumber(str[i - 1])) {
        stack[stack.length - 1] = Number(stack.last() + char)
      } else {
        stack.push(Number(char))
      }
    } else if (char === '(') {
      operatorStack.push(char);
    } else if (char === ')') {
      while (operatorStack.last() !== '(') {
        stack.push(operatorStack.pop())
      }
      operatorStack.pop();
    } else {
      let p = precedence[char];

      if (!operatorStack.length || p > precedence[operatorStack.last()]) {
        operatorStack.push(char);
      } else {
        while (p <= precedence[operatorStack.last()]) {
          stack.push(operatorStack.pop());
        }
        operatorStack.push(char);
      }
    }
  }

  while (operatorStack.length) {
    stack.push(operatorStack.pop());
  }

  return stack;
}

let isOp = (char) => {
  return !!ops[char];
}

const calc = (str) => {
  let parts = convertToRPN(str);
  let stack = [];

  for (let i = 0; i < parts.length; i++) {
    let char = parts[i];
    if (isNumber(char)) {
      stack.push(Number(char));
    } else {
      let n2 = stack.pop();
      let n1 = stack.pop();
      stack.push( ops[char](n1, n2) );
    }
  }

  return stack[0];
}

//--------------------------------TESTS---------------------------------------//

(function testSuite() {
  const simple = '5 + 4 - 3 + 2 - 6';
  const spaces = '2 - 6 * 8 - 4 * 2 / 4 * 7 - 6';
  const single = '23238182234';
  const priority = '2* 6 -3+24-22/5*9'  
  const parens = '(5-4 ) + 24 * (9 + 3) * 9' 
  const extra = " 3+5 / 2 "

  assert('simple', eval(simple), calc(simple));
  assert('spaces', eval(spaces), calc(spaces))
  assert('single', eval(single), calc(single))
  assert('priority', eval(priority), calc(priority))
  assert('parens', eval(parens), calc(parens))
  assert('extra', eval(extra), calc(extra))
})()
