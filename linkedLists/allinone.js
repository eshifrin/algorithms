// //--------------------------------SETUP---------------------------------------//

// // describe the problem

// // incrementing a key will
//   // set its value to 1 if it doesnt exist
//   // otherwise will increment its value
// // decrementing a key (that exists)
//   //deletes its value if its value = 1
//   // otherwise decrements its value
//   // does nothing if the key doesnt exist

// // getMaxKey returns one key for the maximum value
// // getMinKey returns one key for the minimum value

// // constraint : O(1) for everything

const { assert } = require('../helpers.js');

// //--------------------------------FUNCTIONS---------------------------------------//
const dll = function dll(node) {
  this.head = node || null;
  this.tail = node || null;
};

const ValueNode = function ValueNode(value) {
  this.prev = null;
  this.next = null;
  this.value = value;
  this.keySet = new Set();
}

dll.prototype.insertHead = function insertHead(node) {
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    let oldHead = this.head;
    oldHead.prev = node;
    node.next = oldHead;
    this.head = node;      
  }
}

dll.prototype.insertNode = function insertNode(node, previousNode) {  
  if (!previousNode) {
    return this.insertHead(node);
  }

  const next = previousNode.next;

  previousNode.next = node;
  node.prev = previousNode;
  node.next = next;

  if (next) {
    next.previous = node;
  }

  if (this.tail === previousNode) {
    this.tail = node;
  }
}

dll.prototype.removeTail = function removeTail() {
  const oldTail = this.tail;

  if (!oldTail) {
    return null;
  } else if (!oldTail.prev) {
    this.tail = null;
    this.head = null;
  } else {
    oldTail.prev.next = null;
    this.tail = oldTail.prev;
  }

  return oldTail;
}

dll.prototype.removeNode = function removeNode(node) {
  if (!node) {
    return undefined;
  }

  if (node === this.head) {
    this.head = this.head.next;
  }

  if (node === this.tail) {
    this.tail = node.prev;
  }

  if (node.prev) {
    node.prev.next = node.next;
  }

  if (node.next) {
    node.next.prev = node.prev;
  }

  node.prev = null;
  node.next = null;
  return node;
};

class AllInOne {
  constructor() {
    this.keysHT = {};
    this.valuesHT = {};
    this.valuesDLL = new dll();
  }

  getMaxKey() {
    return this.valuesDLL.tail.keySet.values().next().value;
  }

  getMinKey() {
    return this.valuesDLL.head.keySet.values().next().value;
  }

  change(key, incOrDec) {
    let prevValue = this.keysHT[key] || 0;
    let nextValue = prevValue + (incOrDec === 'inc' ? 1 : -1);
    this.keysHT[key] = nextValue;

    if (nextValue === 0) {
      delete this.keysHT[key];
    } else if (!this.valuesHT[nextValue]) {
      const newValueNode = new ValueNode(1);
      const afterNode = incOrDec === 'inc' ? (this.valuesHT[prevValue] || null) : 
                                             (!prevValue ? null : this.valuesHT[prevValue].prev);
      this.valuesDLL.insertNode(newValueNode, afterNode);
      this.valuesHT[nextValue] = newValueNode;
    }
    
    if (prevValue) {
      this.valuesHT[prevValue].keySet.delete(key);
    }

    if (nextValue) {
      this.valuesHT[nextValue].keySet.add(key);
    }

    if (prevValue && !this.valuesHT[prevValue].keySet.size) {
      this.valuesDLL.removeNode(this.valuesHT[prevValue]);
      delete this.valuesHT[prevValue];
    }

    return nextValue;
  }

  inc(key) {
    return this.change(key, 'inc');
  }

  dec(key) {
    if (!this.keysHT[key]) {
      return undefined;
    }
    return this.change(key, 'dec');
  }
}

// //--------------------------------TESTING---------------------------------------//
const test = new AllInOne();
assert('returns 1 after first increment', 1, test.inc('yo'));
test.inc('jk');
test.inc('jk');
test.inc('hello');
test.inc('hello');
assert('increments value to 3 after 3rd increment', 3, test.inc('hello'));
assert('accesses max correctly', 'hello', test.getMaxKey());
assert('accesses min correctly', 'yo', test.getMinKey());
assert('decrements to 0 correctly', 0, test.dec('yo'));
assert('adjusts min correctly afterward', 'jk', test.getMinKey());
assert('default behavior for nonexistent key in a dec', undefined, test.dec('blah'));
