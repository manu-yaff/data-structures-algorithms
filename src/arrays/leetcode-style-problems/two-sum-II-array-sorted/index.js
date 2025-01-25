/**
 * Two Sum II - Input Array Is Sorted
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 */
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

module.exports = twoSum;
