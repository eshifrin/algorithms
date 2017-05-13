//--------------------------------SETUP---------------------------------------//

var testSuite =  require('./main.js')

  //from i = 1 to (potentially) arr.length - 1
    //find the leftmost index j that is smaller than arr[i] = element
    //shift all the elements between j and i to the right
    //insert element into index j

//--------------------------------FUNCTIONS---------------------------------------//

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; arr[j] < arr[j - 1] && j > 0; j--) {
      arr.swap(j, j - 1);
    }
  }

  return arr;
}

//--------------------------------TEST------------------------------------------//

testSuite(insertionSort)

