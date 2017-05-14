//--------------------------------SETUP---------------------------------------//

var testSuite =  require('./main.js')

/* 

merge takes two sorted subarrays and sorts them
  0 initialize index i = end
  1 create a copy of the two arrays (from start to middle, from middle + 1 to end)
  2 while the copies aren't empty:
    place the greater of the last element into index i and decement i

mergesort takes in an array and a start and end
  0 if start = end, return
  1 else split the array into 2, and 
    1a perform mergesort on left and right array
    1b then perform merge on left and right
  2 return the array
*/

//--------------------------------FUNCTIONS---------------------------------------//

const merge = (arr, start, middle, end) => {
  let index = end;

  let right = arr.slice(middle + 1, end + 1);
  let left = arr.slice(start, middle + 1);

  while (right.length || left.length) {
    if (right.last() > left.last() || !left.length) {
      arr[index] = right.pop();
    } else {
      arr[index] = left.pop();
    }
    index--;
  }

  return;
}

const mergesort = (arr, start = 0, end = arr.length - 1) => {
  // >= handles empty array start = 0, end = -1;
  if (start >= end) {
    return arr;
  }

  let middle = Math.floor((start + end) / 2);
  mergesort(arr, start, middle);
  mergesort(arr, middle + 1, end);
  merge(arr, start, middle, end);
  return arr;
}



//--------------------------------TEST------------------------------------------//

testSuite(mergesort);