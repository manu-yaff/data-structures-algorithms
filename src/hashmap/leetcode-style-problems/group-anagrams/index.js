/**
 * Group Anagrams
 * Link: https://leetcode.com/problems/group-anagrams/description/
 */
function groupAnagrams(strs) {
  const map = new Map();

  for (const currentString of strs) {
    const originalString = currentString;

    let count = new Array(26).fill(0);

    for (const char of currentString) {
      const arrayKey = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[arrayKey] += 1;
    }

    let key = count.join('*');

    if (map.has(key)) {
      const tempArray = map.get(key);

      map.set(key, [...tempArray, originalString]);
    } else {
      map.set(key, [originalString]);
    }
  }

  return Array.from(map.values());
}

module.exports = groupAnagrams;
