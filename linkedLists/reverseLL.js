//--------------------------------SETUP---------------------------------------//

//create a binary search tree out of a sorted array
//base case: start < end, return null
//create a  new node with the middle value floor(end + start / 2)
  //set the nodes left = recursive call on createBST on the values to the left of middle
  //set nodes right = recursive call on createBST on the values to the right of middle


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
    let next = head;
    
    while (next) {
        let n = next.next;
        next.next = previous;
        previous = next;
        next = n;
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



