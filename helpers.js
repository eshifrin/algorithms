module.exports.assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}




Array.prototype.last = function() {
  return this[this.length - 1];
}

const isNumber = (n) => !isNaN(Number(n));

convertToRPN = (str) => {
  let precedence = {
    '^' : 4,
    '*' : 3,
    '/' : 3,
    '+' : 2,
    '-' : 1
  }

  let stack = [];
  let operatorStack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === ' ') {
      continue
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
    stack.push(operatorStack.pop())
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
    if (isOp(char)) {
      let n2 = stack.pop();
      let n1 = stack.pop();
      stack.push( ops[char](n1, n2) );
    } else {
      stack.push(Number(char))
    }
  }

  return stack[0];
}




// }


// console.log(stack[0])