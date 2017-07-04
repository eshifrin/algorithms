const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

function node (val) {
    this.val = val;
    this.next = null;
}

function Q() {
    this.size = 0;
    this.head = null;
    this.tail = null;
}

Q.prototype.enqueue = function(val) {
    //aka add to tail
    let n = new node(val);
    this.size++; 

    if (!this.head) {
        this.head = n;
        this.tail = n;
        return;
    } else {
        this.tail.next = n;
        this.tail = n;
    }
    return;
}

Q.prototype.dequeue = function() {
    if (!this.head) {
        return null;
    }

    let oldHead = this.head;
    this.head = oldHead.next;
    if (this.tail === oldHead) {
        this.tail = null;
    }

    this.size--;
    return oldHead.val;
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

const inOrder = (node, cb = console.log) => {
  if (!node) {
    return;
  }

  inOrder(node.left, cb);
  cb(node.val);
  inOrder(node.right, cb);
};

module.exports = {
  assert, node, Q, createTreeFromHeap, createBST, inOrder
}