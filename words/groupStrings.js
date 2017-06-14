const helpers = require('../helpers.js');
const assert = helpers.assert;

/*-----------------------------------setup-----------------------------------*/
// leetcode 249

//   Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:

// "abc" -> "bcd" -> ... -> "xyz"
// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], 
// A solution is:

// [
//   ["abc","bcd","xyz"],
//   ["az","ba"],
//   ["acef"],
//   ["a","z"]
// ]
/*----------------------------------function----------------------------------*/

var groupStrings = function(strings) {
  let groups = {};
  
  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];
    let distance = string.length;
    let stringLength = 0;
    let charDist;
    let tempCharDist;
    
    for (let j = 0; j < distance - 1; j++) {
        tempCharDist = string[j + 1].charCodeAt() -  string[j].charCodeAt();
        charDist = tempCharDist < 0 ? tempCharDist + 26 : tempCharDist
        charDist++;
        stringLength += Math.pow(26, j) * charDist;
    }
    
    let group = distance + '-' + stringLength;
    groups[group] = groups[group] || [];
    groups[group].push(string);
  }
  
  return Object.values(groups);
};
/*----------------------------------testing----------------------------------*/
let input = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
let expectedOutput = [["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
];

assert('starter test', expectedOutput.sort(), groupStrings(input).sort());



