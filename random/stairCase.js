/*

return a staircase of spaces and hashmarks

n = 2
 #
##


n = 6
     *
    **
   ***
  **** 
 *****
******


*/


function stairCase(n) {
  let nextLine = [];
  let stairs = '';

  for (let i = 0; i < n; i++) {
      nextLine.push(' ');
  }

  for (let i = n - 1; i >=0; i--) {
      nextLine[i] = '#';
      stairs += nextLine.join('') + '\n'; 
  }

  return stairs.slice(0, stairs.length - 1);
}

console.log(StairCase(6))