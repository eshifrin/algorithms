//--------------------------------SETUP---------------------------------------//

/*

given an array of nodes find the root

*/

class node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//

const findRoot = (arr) => {
  let m = new Set(arr);

  [...m.keys()].forEach(node => {
    m.delete(node.left);
    m.delete(node.right);
  });


  return [...m.keys()][0];
}

//--------------------------------TESTS---------------------------------------//

  //     4
  //    /\
  //   2  5
  //   /\
  //  1  3
  // */

let four = new node(4);
let two = new node(2);
let five = new node(5);
let one = new node(1);
let three = new node(3);

four.left = two;
four.right = five;
four.left.left = one;
four.left.right = three;

let nodeArr = [two, five, four, one, three];

assert('one test', four, findRoot(nodeArr));
