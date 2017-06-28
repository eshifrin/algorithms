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

module.exports = {
  assert, node, Q
}