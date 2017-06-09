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

//reverse linked list starting from current, setting a next for current.next, and iterate until
// you reach end.....a traditional linked list will be reversed with previous = null, current = head, end = null


var reverseList = function(previous, current, end) {
    if (!current) {
        return head;
    }

    let next;
    
    while (current !== end) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    
    head = previous;
    return head;
};


var isLinkedListPalindrome = function(head) {


    if (!head || !head.next) {
        return true
    } else if (!head.next.next) {
        return head.val === head.next.val;
    }
 
    let slow = head;
    let fast = head;


    //find the middle and tail
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let middle = slow;
    let tail = fast.next ? fast.next : fast;


    //reverse the linked list from the tail up to the middle
    reverseList(middle, middle.next, null);

    let start = head;
    let end = tail;
    let isPal = true;


    // check from the ends until you get to the middle, handle even and odd
    while (start !== end && start !== end.next) {
        isPal = isPal && start.val === end.val;
        start = start.next;
        end = end.next;
    }
    isPal = isPal && start.val === end.val;


    //reverse it back
    reverseList(null, tail, middle);
    return isPal;
}

//--------------------------------TESTING---------------------------------------//

const linkedListFromWord = (str) => {
  if (!str) {
    return null;
  }

  let head = new node(str[0]);
  let ptr = head;

  for (let i = 1; i < str.length; i++) {
    ptr.next = new node(str[i]);
    ptr = ptr.next;
  }

  return head;
}

const wordFromLinkedList = (head) => {
  return head ? head.val + wordFromLinkedList(head.next) : '';
}


(function testSuite(){
  let empty = '';
  let oddPalSpaces = 'yo yo oy oy';
  let oddPal = 'amanaplanacanalpanama';
  let evenPal = 'blahhalb';
  let notOddPal = 'hello';
  let notEvenPal = 'inotyourpalbuddy';

  let words = [empty, oddPalSpaces, oddPal, evenPal, notOddPal, notEvenPal];
  let answers = [true, true, true, true, false, false];

  words.forEach((word, i) => {
    let ll = linkedListFromWord(word);
    assert(word + ' should be ' + answers[i], answers[i], isLinkedListPalindrome(ll));
    assert(word + ' remains intact', word, wordFromLinkedList(ll));
  })
})();
