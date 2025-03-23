/**
 * Set Mismatch
 * Link: https://leetcode.com/problems/set-mismatch/description/
 */
function findErrorNums(nums) {
  let duplicate = 0;
  let missing = 0;

  for (const n of nums) {
    const index = Math.abs(n) - 1;

    if (nums[index] < 0) {
      duplicate = Math.abs(n);
    } else {
      nums[index] = Math.abs(nums[index]) * -1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) missing = i + 1;
  }

  return [duplicate, missing];
}
