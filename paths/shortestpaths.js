//--------------------------------SETUP---------------------------------------//

/* problem: 
    inputs:  grid (array of arrays - 0 represents empty space, 1 an obstace), 
            coordinate 1 (array of [x,y]), 
            coordinate 2 (array of [x2,y2])
    both coordinates will correspond to an empty space on the grid

    output: shortest # steps to get from coordinate 1 to 2, output -1 if no path exists

    e.g. grid =  [[0, 1, 0
                   0, 0, 0]];

    shortestPath(grid, [0,0], [0,2]) //-> 4

    e.g. grid2 =  [[0, 1, 0
                    0, 1, 0]];    

    shortestPath(grid, [0,0], [0,2]) //-> -1
*/

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------FUNCTIONS---------------------------------------//


const shortestPath = (grid, start, end, pathCount = 0) => {
  let [startX, startY] = start;
  let [endX, endY] = end;

  if (startX === endX && startY === endY) { return pathCount; }
  grid[startX][startY] = 1;

  let minSteps = Infinity;

  //steps = [left, right, up, down]
  let steps = [[-1, 0], [1,0], [0, -1], [0, 1]];

  steps.forEach((step) => {
    let nextX = startX + step[0];
    let nextY = startY + step[1];

    //if in bounds and not an obstacle
    if (nextX >= 0 && nextY >=0 && nextX < grid.length && 
        nextY < grid[0].length && !grid[nextX][nextY]) {
        
      //toggle and find shortest Path recursively
      grid[nextX][nextY] = 1;
      let result = shortestPath(grid, [nextX, nextY], end, pathCount + 1);

      //if a path exists from this path, set minSteps = lesser of itself, # of steps this path took
      if (result !== -1) {
        minSteps = Math.min(minSteps, result);
      }

      //toggle
      grid[nextX][nextY] = 0;
    }
  })

  if (minSteps === Infinity) {
    return -1;
  } else {
    return minSteps;
  }
}

//--------------------------------TEST---------------------------------------//


(function testSuite() {

  let paths = [
    [ 0, 0, 1, 0],
    [ 0, 1, 0, 0],
    [ 0, 0, 1, 0],
    [ 0, 0, 0, 0],
  ];

  let paths2 = [
    [ 0, 0, 1, 0],
    [ 0, 1, 0, 0],
    [ 0, 0, 1, 0],
    [ 0, 0, 1, 0],
  ];

  assert('1 avoids obstacles', 9, shortestPath(paths, [0,0], [1,2]));
  assert('2 finds direct path', 2, shortestPath(paths, [1,0], [2,1]));
  assert('3 detects no path', -1, shortestPath(paths2, [0,0], [1,2]));
})();