/**
 * Longest Consecutive Sequence
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/description/
 */
function longestConsecutive(nums) {
  const set = new Set(nums);
  let max = -Infinity;

  for (const value of set) {
    if (!set.has(value - 1)) {
      let sequenceLength = 1;

      while (set.has(value + sequenceLength)) {
        sequenceLength++;
      }

      max = Math.max(max, sequenceLength);
    }
  }

  return max === -Infinity ? 0 : max;
}
