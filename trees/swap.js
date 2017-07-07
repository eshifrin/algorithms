//--------------------------------SETUP---------------------------------------//

// in a perfect bst, swap node values in odd levels

const { createTreeFromHeap, assert, BFS } = require('../helpers.js');
function node (val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
//--------------------------------FUNCTIONS---------------------------------------//


const swapOddBranches = (root) => {
  const nodes = [];

  const storeNodes = (n, level) => {
    if (!n) {
      return;
    }

    storeNodes(n.left, level + 1);
    if (level % 2 !== 0) {
      nodes.push(n.val);
    }
    storeNodes(n.right, level + 1);
    return;
  }

  storeNodes(root, 0);
  console.log(nodes)

  const walkTree = (n, level = 0) => {
    if (!n) {
      return;
    }

   walkTree(n.left, level + 1);
    if (level % 2 !== 0) {
      n.val = nodes.pop();
    } 
    walkTree(n.right, level + 1);
  }

  walkTree(root);
  return root;
}

//--------------------------------FUNCTIONS---------------------------------------//

function testSuite() {
  let root = createTreeFromHeap('abcdefghijklmno')
  swapOddBranches(root);

  let newHeap = [];
  BFS(root, 0, (n) => newHeap.push(n.val));
  assert('valid run', 'acbdefgonmlkjih'.split(''), newHeap)

}
testSuite();


