const helpers = require('../helpers.js')

/*  
    determine if a palindrome can be created out of a string
*/

const canPermutePalindrome = function(s) {
    let letters = new Set();
    let oddCount = 0;
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (letters.has(letter)) {
            letters.delete(letter);
            oddCount--;
        } else {
            letters.add(letter);
            oddCount++;
        }
    }
    
    return oddCount <= 1;
};

/* ---------------TESTS----------------- */
const assert = helpers.assert;

assert('recognizes palindrome', true, canPermutePalindrome('abxba'))
assert('recognizes non-palindrome', false, canPermutePalindrome('abxbba'))
assert('null string is a palindrome', true, canPermutePalindrome(''))
