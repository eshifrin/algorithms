//--------------------------------SETUP---------------------------------------//

/*sentence = set of characters ending in . ? !
 word = contiguous set of letter(s) or 1 empty string
given a series of sentences - find the sentence with the most words and return the # of words in that sentence
*/

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${expected} | got ${processed}`);
  }
}

//--------------------------------FUNCTIONS---------------------------------------//

function countWordsInSentence(s) {
  let words = 0;
  let counting = false;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && counting === true) {
        words++;
        counting = false;
    } else if (s[i] !== ' ') {
        counting = true;
    }   
  }
  
  if (counting === true) {
      words++;
  }
  
  return words;    
}

function mostWords(S) {
  let sentences = S.split(/[.?!]/);
  return Math.max(...sentences.map(countWordsInSentence));
};

//--------------------------------TEST---------------------------------------//

console.log('most words in a sentence')
assert('1 given sentence 1', 4, mostWords('We test coders. Give us a try?'));
assert('2 given sentence 2', 2, mostWords('Forget CVs..Save time . x x'));
assert('3 empty string', 0, mostWords(''));
assert('4 lots of empty spaces everywhere', 6, mostWords(' a   a   here  we   x  go ?  again !! what is going on here'));
assert('5 only sentence closers', 0, mostWords(' ! ?  ! !!! ?  .  .   ... ...'));

