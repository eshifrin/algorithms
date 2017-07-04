//--------------------------------SETUP---------------------------------------//

// return second largest node in a tree
//  solution: keep a count in a closure
//              perform reverse in order traversal, increment count after examining right most nodes
//              return node.val if count = 2...can be modified for any count

//--------------------------------FUNCTIONS---------------------------------------//

const secondLG = (head) => {
  let count = 0;

  const walk = (node) => {
    if (!node) { return undefined; }

    let val = walk(node.right);   
    if (val !== undefined) { return val; }

    count++;
    if (count === 2) {
      return node.val;
    }

    return walk(node.left); 
  }  

  return walk(head);
} 

//--------------------------------TESTING---------------------------------------//
let one = [1, 7, 15, 25, 35, 49, 86];
let two = [1, 2, 3, 4, 9, 15, 25, 65, 75, 122, 191];
let three = [-75, -65, -22, -19, 0, 25, 300, 4000000];
const { createBST, assert } = require('../helpers');

let nums = [one, two, three];
nums.forEach((arr, idx) => {
  assert(`${idx} test`, arr[arr.length - 2], secondLG(createBST(arr)))
});
