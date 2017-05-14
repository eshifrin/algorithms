/*
                  Worst  Avg  Best   Space(w)

relatively inefficient
Bubble Sort        n^2   n^2   n       1
Insertion Sort     n^2   n^2   n       1
Selection Sort     n^2   n^2   n^2     1

efficient & common
Quicksort        n^2    nlogn  nlogn   nlogn
Mergesort        nlogn  nlogn  nlogn   n 
Heapsort         nlogn  nlogn  nlogn   1


Timsort
Tree Sort
Shell Sort
Bucket Sort
Radix Sort
Counting Sort
Cubesort

*/

Array.prototype.swap = function(idx1, idx2) {
  [this[idx1], this[idx2]] = [this[idx2], this[idx1]];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
};

module.exports = (sortFn) => {
  assert('1 sorts reversed', [1, 2, 3, 4, 5, 6, 7, 8, 9], sortFn([9, 8, 7, 6, 5, 4, 3, 2, 1]));
  assert('2 null array', [], sortFn([]));
  assert('3 array of 1', [1], sortFn([1]));
  assert('4 mixed order', [4, 8, 13, 16, 19], sortFn([13, 8, 16, 4, 19]));
  assert('5 including 0 and negatives', [-35, -24, -8, -5, 0, 33, 33], sortFn([-5, -35, 0, 33, 33, -8, -24]));
};





