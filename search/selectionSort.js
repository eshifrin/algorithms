//--------------------------------SETUP---------------------------------------//

var testSuite =  require('./main.js')

/* 
  selection sort
  
  loop through i = 0 to array.length - 1
  find the smallest element from i to end of array, swap it with element @ i
  always n^2

*/

//--------------------------------FUNCTIONS---------------------------------------//

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let minElement = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minElement) {
        minIndex = j;
        minElement = arr[j];
      }
    }

    arr.swap(i, minIndex);
  }

  return arr;
}

//--------------------------------TEST------------------------------------------//

testSuite(selectionSort)

