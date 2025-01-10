/**
 * Valid Anagram
 * Link: https://leetcode.com/problems/valid-anagram/description/
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    // set the s key plus 1
    const sKey = s[i];
    const sValue = map.get(sKey) ?? 0;
    map.set(sKey, sValue + 1);

    // set the t key minus 1
    const tKey = t[i];
    const tValue = map.get(tKey) ?? 0;
    map.set(tKey, tValue - 1);
  }

  for (const value of map.values()) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
