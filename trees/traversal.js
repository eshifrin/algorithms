/*

all solutions will be recursive unless with the suffix IT - iterative

DFS

In order:  left, root, right
Pre order:  root, left, right
Post order:  left, right, root

*/

//--------------------------------SETUP---------------------------------------//


class BST {
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
}

//--------------------------------FUNCTIONS---------------------------------------//

const inOrder = (node, cb = console.log) => {
  if (!node) {
    return;
  }

  inOrder(node.left, cb);
  cb(node.val);
  inOrder(node.right, cb);
}

const preOrder = (node, cb = console.log) => {
  if (!node) {
    return;
  }

  cb(node.val);
  preOrder(node.left, cb);
  preOrder(node.right, cb);
}

const postOrder = (node, cb = console.log) => {
  if (!node) {
    return;
  }

  postOrder(node.left, cb);
  postOrder(node.right, cb);
  cb(node.val);
}

const bfs = (root, cb = console.log, level = [root]) => {
  if (!level.length) {
    return;
  }

  const nextLevel = [];

  level.forEach((node) => {
    cb(node.val);
    if (node.left) { nextLevel.push(node.left); };
    if (node.right) { nextLevel.push(node.right); };
  });

  bfs(null, cb, nextLevel);
  return;
}

//--------------------------------TESTS---------------------------------------//

(function testSuite() {

  /* sample BST
      4
     /\
    2  5
    /\
   1  3
  */

  let testBST = new BST(4);
  testBST.left = new BST(2);
  testBST.right = new BST(5);
  testBST.left.left = new BST(1);
  testBST.left.right = new BST(3);

  inOrderExpected = [1, 2, 3, 4, 5];
  inOrderResult = [];

  inOrder(testBST, val => inOrderResult.push(val));
  assert('inOrder', inOrderExpected, inOrderResult);

  preOrderExpected = [4, 2, 1, 3, 5];
  preOrderResult = [];

  preOrder(testBST, val => preOrderResult.push(val));
  assert('preOrder', preOrderExpected, preOrderResult);

  postOrderExpected = [1, 3, 2, 5, 4];
  postOrderResult = [];

  postOrder(testBST, val => postOrderResult.push(val));
  assert('postOrder', postOrderExpected, postOrderResult);


  bfsExpected = [4, 2, 5, 1, 3];
  bfsResult = [];

  bfs(testBST, val => bfsResult.push(val));
  assert('bfs', bfsExpected, bfsResult);
})();





