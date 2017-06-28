//--------------------------------SETUP---------------------------------------//
const helpers = require('../helpers');
const assert = helpers.assert;

/* calculate a string using that includes these 4 operators * - + /
  operators go to the left of the operands
*/


// edge cases: array has stuff left in it, notoperand num num 
//--------------------------------FUNCTIONS---------------------------------------//

const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '×': (a, b) => a * b,
  '÷': (a, b) => a / b
};

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.nextToLast = function() {
  return this[this.length - 2];
}

const isOperand = (n) => !isNaN(Number(n));

const calc = (str) => {
  let symbols = str.split(' ').map(n => isOperand(n) ? Number(n) : n);
  let q = [];

  for (let i = 0; i < symbols.length; i++) {
    q.push(symbols[i]);

    while (isOperand(q.last()) && isOperand(q.nextToLast())) {
      let operand1 = q.pop();
      let operand2 = q.pop();

      let operator = q.pop();
      let operation = ops[operator];
      if (!operation) {
        return null;
      }

      q.push(operation(operand2, operand1));
    }

  }

  return q.length === 1 ? q[0] : null;
}

//--------------------------------TESTS---------------------------------------//

(function testSuite() {
  const simple = '- × ÷ 15 - 7 + 1 1 3 + 2 + 1 1';
  const oneNum = '8';
  const invalidOne = '5 5 + 2'
  const invalidTwo = 'blah 2 3'

  assert('simple', 5, calc(simple));
  assert('oneNum', 8, calc(oneNum));
  assert('invalidOne', null, calc(invalidOne));
  assert('invalidTwo', null, calc(invalidTwo));
})()
