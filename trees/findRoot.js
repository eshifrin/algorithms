// --------------------------------SETUP---------------------------------------//
/*

given an array of nodes find the root

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const assert = require('../helpers.js');

// --------------------------------FUNCTIONS---------------------------------------//
const findRoot = (arr) => {
  const m = new Set(arr);

  m.forEach((node) => {
    m.delete(node.left);
    m.delete(node.right);
  });

  return [...m][0];
};
// --------------------------------TESTS---------------------------------------//
  //     4
  //    /  \
  //   2    5
  //   /\   /\
  //  1  3 4 4
  // */

const four = new Node(4);
const fourDupe = new Node(4);
const fourDupeTwo = new Node(4);
const two = new Node(2);
const five = new Node(5);
const one = new Node(1);
const three = new Node(3);

four.left = two;
four.right = five;
four.right.right = fourDupe;
four.right.left = fourDupeTwo;

four.left.left = one;
four.left.right = three;

const nodeArr = [two, five, fourDupe, fourDupeTwo, four, one, three];
assert('one test findRoot_set', four, findRoot(nodeArr));
