/**
 * Find First and Last Position of Element in Sorted Array
 * Link: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */
function searchRange(nums, target) {
  if (nums.length === 0) return [-1, -1];

  let left = 0;
  let right = nums.length - 1;
  let start = -1;

  // find starting point
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        start = mid;
      }
      right = mid - 1;
    } else {
      left = left + 1;
    }
  }

  let end = -1;
  // find end point
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        end = mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [start, end];
}
