/**
 * Ransom Note
 * Link: https://leetcode.com/problems/ransom-note/description/
 */
function canConstruct(ransomNote, magazine) {
  const map = new Map();

  for (const char of magazine) {
    const value = map.get(char) ?? 0;

    map.set(char, value + 1);
  }

  for (const char of ransomNote) {
    if (map.has(char)) {
      const value = map.get(char);

      if (value > 0) {
        map.set(char, value - 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

module.exports = canConstruct;
