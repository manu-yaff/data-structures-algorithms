/**
 * Subarray Product Less Than K
 * Link: https://leetcode.com/problems/subarray-product-less-than-k/description/
 */
function numSubarrayProductLessThanK(nums, k) {
  if (k === 0 || k === 1) return 0; // if k is 1, then there are not subarrays

  let count = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product = product / nums[left];
      left++;
    }

    count = count + (right - left + 1);
  }

  return count;
}
