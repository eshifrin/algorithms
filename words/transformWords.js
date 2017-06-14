const { assert, Q } = require('../helpers.js');

const stepsToTransform = function(start, end, dict) {
  if (start === end) {
      return 1;
  }

  if (!start || !end) {
      return 0;
  }

  let q = new Q();
  q.enqueue(start);
  let dictionary = new Set(dict);
  let steps = 1;
  let aCode = 'a'.charCodeAt();

  while (q.size) {
    let tempSize = q.size;

    for (let w = 0; w < tempSize; w++) {
      let word = q.dequeue();

      for (i = 0; i < word.length; i++) {
        for (ltr = aCode; ltr < aCode + 26; ltr++) {
          let newWord = word.slice(0, i) + 
            String.fromCharCode(ltr) + 
            word.slice(i + 1);

          if (newWord === end) {
              return steps + 1;
          }

          if (dictionary.has(newWord)) {
              q.enqueue(newWord);
              dictionary.delete(newWord);
          }
        }
      }
    }

    steps++;
  }

  return 0;
};


/* ---------------TESTS----------------- */

assert('base test', 5, stepsToTransform('hit', 'cog', ["hot","dot","dog","lot","log"] ));
assert('not found test', 0, stepsToTransform('hit', 'crg', ["hot","dot","dog","lot","log"]));
assert('same word test', 1, stepsToTransform('hit', 'hit', ["hot","dot","dog","lot","log"]));


