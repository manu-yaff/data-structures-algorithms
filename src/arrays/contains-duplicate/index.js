/**
 * Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct
 *
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function containsDuplicate(nums) {
  const storage = {};

  for (const element of nums) {
    if (storage[element] === element) {
      return true;
    }
    storage[element] = element;
  }

  return false;
}

module.exports = containsDuplicate;
