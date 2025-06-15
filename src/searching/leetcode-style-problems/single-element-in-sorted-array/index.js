/**
 * Single Element in Sorted Array
 * Link: https://leetcode.com/problems/single-element-in-a-sorted-array/description
 */
function singleNonDuplicate(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] != nums[mid - 1] && nums[mid] != nums[mid + 1])
      return nums[mid];

    if (nums - 1 < 0 || nums[mid - 1] === nums[mid]) {
      const toLeft = mid - 1;

      if (toLeft % 2 === 1) {
        right = mid - 2;
      } else {
        left = mid + 1;
      }
    } else {
      const toLeft = mid;

      if (toLeft % 2 === 1) {
        right = mid - 1;
      } else {
        left = mid + 2;
      }
    }
  }
}
