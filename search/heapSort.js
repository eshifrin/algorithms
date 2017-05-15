//--------------------------------SETUP---------------------------------------//

var testSuite =  require('./main.js')

/* 

  heapSort 
    //first build a max heap

    //set end element = last element
    //then continuously swap first and end element
    //rebuild max heap up to but not including the end element
    //decrement end element

*/

//--------------------------------FUNCTIONS---------------------------------------//

const buildMaxHeap = (arr) => {
  //lowest parent will be the end child's parent

  //child nodes = 2n + 1, 2n + 2 where i is the index of parent
  //parent node = Math.floor(i - 1 / 2) where is is the index of the child
    //the last child is at length - 1
    //parent node = Math.floor(length - 2 / 2)


  //for each parent node
    //if the parent is less than one of its children,
        //swap the parent node with the larger of its children

  let lastParent = Math.floor((arr.length - 2) / 2);

  for (let i = lastParent; i >= 0; i--) {
    siftDown(arr, i, lastParent);    
  }

  return arr;
}


const swapIndex = (arr, i) => {
  let child1 = 2 * i + 1;
  let child2 = 2 * i + 2;

    if (arr[child1] > arr[i] || arr[child2] > arr[i]) {
      if (arr[child2] === undefined || arr[child1] > arr[child2]) {
        return child1;
      } else {
        return child2;
      }
    } else {
      return i;
    } 
}

const siftDown = (arr, i, lastParent) => {
  let j = i;
  let swapped = true;;

  while (swapped && j <= lastParent) {
    swapped = false;
    let k = swapIndex(arr, j);
    if (k !== j) {
      swapped = true;
      arr.swap(j, k);
      j = k;
    }
  }
};

const heapSort = (arr) => {

  //build a max heap (largest is the first element)
  buildMaxHeap(arr);
  for (let end = arr.length - 1; end > 0; end--) {
    let lastParent = Math.floor((end - 1) / 2) - 1;

    //swap the first and 'end' element;
    arr.swap(0, end);

    //get the remaining max element back to the top;
    siftDown(arr, 0, lastParent);
  }

  return arr;
}

//--------------------------------TEST------------------------------------------//

testSuite(heapSort)
