//--------------------------------SETUP---------------------------------------//

var testSuite =  require('./main.js')

//step 1 iterate through array, if there's a large # before a small #, swap them.
//repeat step 1 until you haven't swapped

//if the array is reversed, you will need to loop n times.  
//    each time you visit 1 less # of items but that amounts to 1 + 2 + 3 + ...n-1 + n   = n(n + 1) / 2 = O(n)

//--------------------------------FUNCTIONS---------------------------------------//

const bubbleSort = (arr) => {
  let swapped;
  let stopAt = arr.length - 1;
  let nextStop;

  do {
    swapped = false;
    for (let i = 0; i < stopAt; i++) {
      if (arr[i] > arr[i + 1]) {
        arr.swap(i, i + 1);
        swapped = true;
        nextStop = i + 1;
      }
    }
    stopAt = nextStop;
  } while (swapped);

  return arr;
}

//--------------------------------TEST------------------------------------------//
testSuite(bubbleSort);

