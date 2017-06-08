// create empty array starting with $ and ending with @, iterate from i = 0 to string length, push a hash (#) and then the ltter at index i



//  keep track of center and right = 0
// iterate over the palindrome array starting at 1
  // set the mirror = center * 2  - index
  // if the right wall is > i, set P[i] = minimum(P[mirror], right - i)

  // expand outwards from P[i] and increment it if the mirroring values are =
  // afterwards if i + P[i] > right, overwrite c = i, and right = i + p[i]

//return the max of the palindrome array

var longestPalindrome = (str) => {
  let letters = ['$'];
  let lengths = [0];

  for (let i = 0; i < str.length; i++) {
    letters.push('#');
    letters.push(str[i]);
    lengths.push(0);
    lengths.push(0);

  }

  letters.push('#')
  letters.push('@');
  lengths.push(0);

  lengths.push(0);

  let c = 0;
  let r = 0;
  let mirror;
  let leftMost;
  let rightMost;

  for (let i = 1; i < letters.length; i++) {


    if (r > i) {
      mirror = c * 2 - i;
      lengths[i] = Math.min(lengths[mirror], r - i);
    }

    leftMost = i - lengths[i] - 1;
    rightMost = i + lengths[i] + 1;

    while (letters[leftMost] === letters[rightMost]) {
      lengths[i]++;
      leftMost--;
      rightMost++;
    }

    if (i + lengths[i] > r) {
      r = i + lengths[i];
      c = i;
    }
  }

  return Math.max(...lengths);
}

console.log(longestPalindrome('babbab'));