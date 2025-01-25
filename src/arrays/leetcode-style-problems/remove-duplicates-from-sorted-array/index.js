/**
 * Remove Duplicates from Sorted Array
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description
 */
function removeDuplicates(nums) {
  let lastUniqueIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] > nums[lastUniqueIndex - 1]) {
      [nums[lastUniqueIndex], nums[i]] = [nums[i], nums[lastUniqueIndex]];
      lastUniqueIndex++;
    }
  }

  return lastUniqueIndex;
}

module.exports = removeDuplicates;
