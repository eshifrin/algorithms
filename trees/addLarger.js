//--------------------------------SETUP---------------------------------------//s
// for each node, add the value of all the nodes larger than it
// eg if nodes are 1 2 3, final values should be  7 5 3
const { createBST, assert } = require('../helpers');
const inOrder = (node, cb = console.log) => {
  if (!node) {
    return;
  }

  inOrder(node.left, cb);
  cb(node);
  inOrder(node.right, cb);
};
//--------------------------------FUNCTIONS---------------------------------------//

// const addLarger = (head) => {
//   let total = 0;
//   inOrder(head, (node) => total += node.val);
//   inOrder(head, (node) => {
//     let v = node.val;
//     node.val = total;
//     total-= v;
//   })

//   return head;
// } 

const addLarger = (head, sumLessThan = 0) => {
  if (!head) {
    return 0;
  }
  let oldNum = head.val;
  let rhs = addLarger(head.right, sumLessThan);
  let lhs = addLarger(head.left, sumLessThan + rhs + oldNum);
  head.val = rhs + oldNum + sumLessThan;
  return oldNum + rhs + lhs;  
}

//--------------------------------TESTING---------------------------------------//
let one = [1, 7, 15, 25, 35, 49, 86];
let two = [1, 2, 3, 4, 9, 15, 25, 65, 75, 122, 191];
let three = [-75, -65, -22, -19, 0, 25, 300, 4000000];

let nums = [one, two, three];
let sum = (arr) => arr.reduce((a, b) => a + b);

nums.forEach((arr, idx) => {
  let total = sum(arr);
  let expected = arr.reduce((accum, el) => {
    accum.push(total);
    total -= el;
    return accum;
  }, []);

  let tree = createBST(arr);
  addLarger(tree);
  let newTreeInArray = [];
  inOrder(tree, (node) => newTreeInArray.push(node.val));
  assert(`${idx} test`, expected, newTreeInArray)
});