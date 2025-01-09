/**
 * Left and Right Sum Differences
 * Link: https://leetcode.com/problems/left-and-right-sum-differences/
 */
function leftRightDifference(nums) {
  const output = new Array(nums.length);

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    const value = Math.abs(leftSum - rightSum);

    leftSum += nums[i];

    output[i] = value;
  }

  return output;
}

module.exports = leftRightDifference;
