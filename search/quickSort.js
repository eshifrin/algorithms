//--------------------------------SETUP---------------------------------------//

// var testSuite =  require('./main.js')

// /* 
//   step 1: if examining an array of less than length 2 return the array
//   step 2: initialize start as 0, end (aka pivot element) as arr.length - 1 if it doesnt exist
//   step 3: rearrange the elements from start to end so that the pivot element is sorted (smaller elements to its left, larger to its right)
//   step 4: repeat steps 1 through 3 on the subarrays to the left and right of the pivot
// */

// //--------------------------------FUNCTIONS---------------------------------------//

// const partition = (arr, start, end) => {

//   const pivot = arr[end];
//   let lastIndexSmallerThanPivot = start - 1;

//   for (let j = start; j < end; j++) {
//     if (arr[j] <= pivot) {
//       lastIndexSmallerThanPivot++;
//       arr.swap(lastIndexSmallerThanPivot, j);
//     }
//   }
//   arr.swap(end, lastIndexSmallerThanPivot + 1);

//   return lastIndexSmallerThanPivot + 1;
// }

// const quickSort = (arr, start = 0, end = arr.length - 1) => {
//   if (end - start <= 0) {
//     return arr;
//   }

//   let pivot = partition(arr, start, end);
//   quickSort(arr, start, pivot - 1);
//   quickSort(arr, pivot + 1, end);

//   return arr;
// }



//--------------------------------TEST------------------------------------------//

// testSuite(quickSort)


const avg = (n, start) => {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.max(i - 1, n - i - 1))
  }

  arr[Math.floor(n / 2)] = 0

  console.log(arr)

}

avg(4)

