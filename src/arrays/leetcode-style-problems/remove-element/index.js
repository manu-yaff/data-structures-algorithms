/**
 * Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val
 *
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 *
 */

// Time complexity O(n)
// Space complexity O(1)
function removeElement(nums, val) {
  if (nums.length === 0) return 0;

  let lastAvailableIndex = 0;

  nums.forEach((element) => {
    if (element !== val) {
      nums[lastAvailableIndex] = element;
      lastAvailableIndex += 1;
    }
  });

  return lastAvailableIndex;
}

module.exports = removeElement;
