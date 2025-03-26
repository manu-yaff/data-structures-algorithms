/**
 * How Many Numbers Are Smaller Than the Current Number
 * Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/
 */
function smallerNumbersThanCurrent(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const map = new Map();

  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], i);
    }
  }

  return nums.map((num) => map.get(num));
}
