/**
 * Running Sum of 1d Array
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums
 *
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function runningSum(nums) {
  let sum = 0;

  const result = [];

  for (const element of nums) {
    sum += element;
    result.push(sum);
  }

  return result;
}

module.exports = runningSum;
