/**
 * Find Minimum in Rotated Sorted Array
 * Link: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
function findMin(nums) {
  let pivot = nums[0];
  let left = 0;
  let min = nums[0];
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] >= pivot) {
      left = mid + 1;
    } else {
      min = nums[mid];
      right = mid - 1;
    }
  }

  return min;
}
