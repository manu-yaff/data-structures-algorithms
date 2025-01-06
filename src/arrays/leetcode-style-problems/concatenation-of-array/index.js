/**
 * Concatenation of Array
 * 
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

 * Specifically, ans is the concatenation of two nums arrays.

 * Return the array ans

 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * 
 */

// Time complexity O(n)
// Space complexity O(n)
function getConcatenation(nums) {
  const ans = [];

  let j = -1;

  for (let i = 0; i < nums.length * 2; i++) {
    if (i == nums.length) {
      j = 0;
    } else {
      j++;
    }
    ans.push(nums[j]);
  }

  return ans;
}

module.exports = getConcatenation;
