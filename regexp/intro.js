//--------------------------------SETUP---------------------------------------//

// describe the problem
const { assert } = require('../helpers.js');

// given a pattern see if a string matches it
// pattern = "abab", str = "redblueredblue" should return true.
// pattern = "aaaa", str = "asdasdasdasd" should return true.
// pattern = "aabb", str = "xyzabcxzyabc" should return false
//--------------------------------FUNCTIONS---------------------------------------//

const wordPatternMatch = (pattern, str) => {
  let r = '';
  let ht = {};
  let counter = 1;

  for (let i = 0; i < pattern.length; i++) {
    let ltr = pattern[i];
    let idx = ht[ltr];

    if (idx === undefined) {
      ht[ltr] = counter;
      counter++;
      r += '(\\w+)';
    } else {
      r += `\\${idx}`;
    }
  }

  r = new RegExp(`^${r}$`);
  let results = r.exec(str);
  if (results === null) {
    return false;
  }
  console.log(str.match(r))

  let uniques = new Set(results.slice(1));
  return uniques.size === results.length - 1;
}

//--------------------------------TESTING---------------------------------------//
// assert('abab', true, wordPatternMatch('abab', 'redblueredblue'));
// assert('aaaa', true, wordPatternMatch('aaaa', 'asdasdasdasd'));
// assert('aabb', false, wordPatternMatch('aabb', 'xyzabcxzyabc'));
// assert('aa', false, wordPatternMatch('ab', 'aa'));

wordPatternMatch('ats', 'ataa')