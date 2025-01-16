/**
 * Sort Array By Parity
 * Link: https://leetcode.com/problems/sort-array-by-parity/description/
 */
function sortArrayByParity(nums) {
  let lastAvailable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let temp = nums[lastAvailable];
      nums[lastAvailable] = nums[i];
      nums[i] = temp;
      lastAvailable += 1;
    }
  }

  return nums;
}

module.exports = sortArrayByParity;
