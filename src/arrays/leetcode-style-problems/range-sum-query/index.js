/**
 * Range Sum Query - Immutable
 * Link: https://leetcode.com/problems/range-sum-query-immutable/description/
 */
var NumArray = function (nums) {
  this.prefix = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    this.prefix[i + 1] = this.prefix[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefix[right + 1] - this.prefix[left];
};
