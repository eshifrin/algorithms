//--------------------------------SETUP---------------------------------------//

//create a binary search tree out of a sorted array
//base case: start < end, return null
//create a  new node with the middle value floor(end + start / 2)
  //set the nodes left = recursive call on createBST on the values to the left of middle
  //set nodes right = recursive call on createBST on the values to the right of middle


class node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const createTreeFromHeap = (arr, i = 0) => {
  if (i >= arr.length) {
    return null;
  }

  let n = new node(arr[i]);
  n.left = createTreeFromHeap(arr, 2 * i + 1);
  n.right = createTreeFromHeap(arr, 2 * i + 2);
  return n;
}

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${JSON.stringify(expected)} | got ${JSON.stringify(processed)}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//


const createBST = (arr, start = 0, end = arr.length - 1) => {
  if (end < start) {
    return null;
  }

  let middle = Math.floor((start + end) / 2);
  let n = new node(arr[middle]);
  n.left = createBST(arr, start, middle - 1);
  n.right = createBST(arr, middle + 1, end);

  return n;
};

//--------------------------------TEST---------------------------------------//

assert('empty array', createTreeFromHeap([]), createBST([]));
assert('one item', createTreeFromHeap([5]), createBST([5]));
assert('three items', createTreeFromHeap([2,1,3]), createBST([1,2,3]));
assert('seven items', createTreeFromHeap([4,2,6,1,3,5,7]), createBST([1,2,3,4,5,6,7]));
assert('fifteen items', createTreeFromHeap([8,4,12,2,6,10,14,1,3,5,7,9,11,13,15]), createBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));



