/**
 * 4Sum
 * Link: https://leetcode.com/problems/4sum/description/
 */
function fourSum(nums, target) {
  const result = [];

  if (nums.length < 4) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          left++;

          while (nums[left] === nums[left - 1] && left < right) {
            left++;
          }
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return result;
}
