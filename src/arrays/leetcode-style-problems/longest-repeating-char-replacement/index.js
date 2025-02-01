/**
 * Longest Repeating Character Replacement
 * Link: https://leetcode.com/problems/longest-repeating-character-replacement/description/
 */
function characterReplacement(s, k) {
  let result = -Infinity;
  let windowStart = 0;

  const charCount = new Map();

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    charCount.set(s[windowEnd], (charCount.get(s[windowEnd]) ?? 0) + 1);

    const windowLength = () => windowEnd - windowStart + 1;

    while (windowLength() - getMaxFromMap(charCount) > k) {
      charCount.set(s[windowStart], charCount.get(s[windowStart]) - 1);
      windowStart++;
    }

    result = Math.max(result, windowLength());
  }

  return result;
}

function getMaxFromMap(map) {
  return Math.max(...Array.from(map.values()));
}
