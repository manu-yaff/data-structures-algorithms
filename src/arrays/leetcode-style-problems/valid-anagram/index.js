/**
 * Valid anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 */

// Time complexity O(n)
// Space complexity O(1), the store can grow at most 26 keys, that's the size of the alphabet
function validAnagram(s, t) {
  let storeS = {};
  let storeT = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    storeS[s[i]] = storeS[s[i]] !== undefined ? storeS[s[i]] + 1 : 1;
    storeT[t[i]] = storeT[t[i]] !== undefined ? storeT[t[i]] + 1 : 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (storeS[s[i]] !== storeT[s[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = validAnagram;
