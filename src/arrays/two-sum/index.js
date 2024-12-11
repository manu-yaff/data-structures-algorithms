/**
 * Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

// Time complexity O(n)
// Space complexity O(n)
function twoSum(nums, target) {
  const storage = {}; // in the format {number: index}

  for (let i = 0; i < nums.length; i++) {
    const complementary = target - nums[i];

    if (storage[complementary] !== undefined) {
      return [storage[complementary], i];
    }

    storage[nums[i]] = i;
  }
}

module.exports = twoSum;
