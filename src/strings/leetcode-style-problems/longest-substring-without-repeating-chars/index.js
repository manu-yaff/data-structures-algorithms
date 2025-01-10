/**
 * Longest Substring Without Repeating Characters
 * Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
function lengthOfLongestSubstring(s) {
  let windowStart = 0;
  let set = new Set();
  let max = -Infinity;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    while (set.has(currentChar)) {
      set.delete(s[windowStart]);
      windowStart += 1;
    }

    // to get the current length of the window
    let currentLength = i - windowStart + 1;

    max = Math.max(max, currentLength);
    set.add(currentChar);
  }

  return max === -Infinity ? 0 : max;
}

module.exports = lengthOfLongestSubstring;
