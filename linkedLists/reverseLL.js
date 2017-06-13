//--------------------------------SETUP---------------------------------------//

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${JSON.stringify(expected)} | got ${JSON.stringify(processed)}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//

var reverseList = function(head) {
    if (!head) {
        return head;
    }
    
    let previous = null;
    let current = head;
    let next;
    
    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    head = previous;
    return head;
};


//--------------------------------TESTING---------------------------------------//

let one = new node(1);
let two = new node(2);
let three = new node(3);

one.next = two;
two.next = three;

function testSuite(){
  reverseList(one);
  assert('head is reversed', null, one.next);
  assert('tail is reversed', two, three.next);
  assert('null string passes', null, reverseList(null));
}

testSuite();



