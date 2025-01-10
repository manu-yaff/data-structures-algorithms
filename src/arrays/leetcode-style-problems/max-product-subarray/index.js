/**
 * Maximum Product Subarray
 * Link: https://leetcode.com/problems/maximum-product-subarray/description/
 */
function maxProduct(nums) {
  let leftProduct = 1;
  let rightProduct = 1;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    leftProduct = leftProduct === 0 ? 1 : leftProduct;
    rightProduct = rightProduct === 0 ? 1 : rightProduct;

    leftProduct *= nums[i];
    rightProduct *= nums[nums.length - i - 1];

    max = Math.max(max, leftProduct, rightProduct);
  }

  return max === -0 ? 0 : max;
}

module.exports = maxProduct;
