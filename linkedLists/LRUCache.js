//--------------------------------SETUP---------------------------------------//

var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${JSON.stringify(expected)} | got ${JSON.stringify(processed)}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//

var dll = function() {
    this.head = null;
    this.tail = null;
}

dll.prototype.insertHead = function(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      oldHead.prev = node;
      node.next = oldHead;
      this.head = node;      
    }
    return;
}

dll.prototype.removeTail = function() {
  let oldTail = this.tail;

  if (!oldTail) {
    return null;
  } else if (!oldTail.prev) {
    this.tail = null;
    this.head = null;
    return oldTail;
  } else {
    oldTail.prev.next = null;
    this.tail = oldTail.prev;
    return oldTail;
  }
}

dll.prototype.removeNode = function(node) {
  if (!node) {
    return;
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

  return node;
}
 
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.usage = 0;
  this.pairs = {};
  this.dll = new dll();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.pairs[key] !== undefined) {
    let node = this.pairs[key];
    this.dll.removeNode(node);
    this.dll.insertHead(node);
    return node.value;
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    //if just updating
  if (this.pairs[key] !== undefined) {
    let node = this.pairs[key];
    node.value = value;
    this.dll.removeNode(node);
    this.dll.insertHead(node);
    return;      
  } else {
      let node = new Node(key, value);
      this.pairs[key] = node;        
      this.usage++;
      
      if (this.usage > this.capacity) {
        let oldTailKey = this.dll.removeTail().key;
        delete this.pairs[oldTailKey];
        this.usage--;
      }
      
      this.dll.insertHead(node);
      return;
  }
};


//--------------------------------TESTING---------------------------------------//

(function testSuite(){
  let l = new LRUCache(2);
  l.put(1, 1);
  l.put(2, 2);
  l.get(1, 1);
  l.put(3, 3);
  assert('removes least recently used', -1, l.get(2));
  assert('keeps recently used', 1, l.get(1));
  l.put(4, 4);
  l.put(3, 3);
  l.put(4, 2);
  l.put(5, 5);
  assert('update counts as use p1', l.get(4), 2);
  assert('update counts as use p2', l.get(3), -1);
})();

