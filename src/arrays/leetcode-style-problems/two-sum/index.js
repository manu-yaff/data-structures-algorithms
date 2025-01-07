/**
 * Two Sum
 * Link: https://leetcode.com/problems/two-sum/description/
 */
function twoSum(nums, target) {
  if (nums.length === 2) {
    return [0, 1];
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(target - nums[i], i);
    }
  }
}

module.exports = twoSum;
