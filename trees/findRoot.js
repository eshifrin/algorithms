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

  m.forEach(node => {
    m.delete(node.left);
    m.delete(node.right);
  });


  return [...m][0];
}



//--------------------------------TESTS---------------------------------------//

  //     4
  //    /  \
  //   2    5
  //   /\   /\
  //  1  3 4 4
  // */

let four = new node(4);
let fourDupe = new node(4);
let fourDupeTwo = new node(4);
let two = new node(2);
let five = new node(5);
let one = new node(1);
let three = new node(3);

four.left = two;
four.right = five;
four.right.right = fourDupe;
four.right.left = fourDupeTwo;

four.left.left = one;
four.left.right = three;

let nodeArr = [two, five, fourDupe, fourDupeTwo, four, one, three];

assert('one test findRoot_set', four, findRoot(nodeArr));
assert('one test findRoot_obj', four, findRoot2(nodeArr));



