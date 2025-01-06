/**
 * Left and Right Sum Differences
 *
 * Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
 *  answer.length == nums.length.
 *  answer[i] = |leftSum[i] - rightSum[i]|.
 * Where:
 *  leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
 *  rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
 *
 * Return the array answer
 *
 * Input: nums = [10,4,8,3]
 * Output: [15,1,11,22]
 *
 */

// Solution 1
// Time complexity O(n + n), O(n)
// Space complexity O(n)
function leftRightDifference(nums) {
  if (nums.length === 1) return [0];

  const result = [];
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    const absValue = Math.abs(leftSum - rightSum);
    leftSum += nums[i];

    result.push(absValue);
  }

  return result;
}

// Solution 2
// Time complexity O(n^2)
// Space complexity O(n)
// function leftRightDifference(nums) {
//   if (nums.length === 1) return [0];

//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     const leftSum = getLeftSum(nums, i - 1);
//     const rightSum = getRightSum(nums, i + 1);
//     const absValue = Math.abs(leftSum - rightSum);

//     result.push(absValue);
//   }

//   return result;
// }

// function getLeftSum(array, i) {
//   let sum = 0;

//   while (i >= 0) {
//     sum += array[i];
//     i--;
//   }

//   return sum;
// }

// function getRightSum(array, i) {
//   let sum = 0;

//   while (i <= array.length - 1) {
//     sum += array[i];
//     i++;
//   }

//   return sum;
// }

module.exports = leftRightDifference;
