/**
 * Find the Difference
 * Link: https://leetcode.com/problems/find-the-difference/description/
 */
function findTheDifference(s, t) {
  if (s.length === 0) return t;

  const map = new Map();

  for (const char of t) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) - 1);
  }

  const temp = map.entries().find(([_, value]) => value != 0);

  return temp[0];
}
