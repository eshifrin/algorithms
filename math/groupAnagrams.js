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

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))




