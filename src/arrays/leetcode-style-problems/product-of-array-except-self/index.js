/**
 * Product of Array Except Self
 * Link: https://leetcode.com/problems/product-of-array-except-self/description/
 */
function productExceptSelf(nums) {
  let prefixProduct = 1;
  let output = new Array(nums.length).fill(null);

  for (let i = 0; i < nums.length; i++) {
    output[i] = prefixProduct;

    prefixProduct *= nums[i];
  }

  let postfixProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * postfixProduct;

    postfixProduct *= nums[i];
  }

  return output.map((x) => (x === -0 ? 0 : x)); // -0 case
}

module.exports = productExceptSelf;
