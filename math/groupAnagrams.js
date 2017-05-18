
//--------------------------------SETUP---------------------------------------//

//return an array of arrays of words that are anagrams of each other 

const assert = (str, expected, processed) => {
  if (JSON.stringify(expected) === JSON.stringify(processed)) {
    console.log(str, 'passed');
  } else {
    console.log(str, `failed - expected: ${JSON.stringify(expected)} | got ${JSON.stringify(processed)}`);
  }
};

//--------------------------------FUNCTIONS---------------------------------------//



function groupAnagrams(strings) {
  let seenStrings = {};
  let groups = [];

  for (let i = 0; i < strings.length; i++) {
    let sum = 0;
    let string = strings[i];
    let sortedString = string.split('').sort().join('');

    let index = seenStrings[sortedString];

    if (index !== undefined) {
      groups[index].push(string);
    } else {
      seenStrings[sortedString] = groups.length;
      groups.push([string]);
    }
  }

  return groups
}


//--------------------------------TESTS---------------------------------------//
assert('one test', [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']], groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));




