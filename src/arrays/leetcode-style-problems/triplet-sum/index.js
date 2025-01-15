function threeSum(nums) {
  let output = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    let target = 0 - currentNumber;

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    while (left < right) {
      const currentSum = nums[left] + nums[right];

      if (currentSum === target) {
        const triplet = [currentNumber, nums[left], nums[right]];
        output.push(triplet);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      } else if (currentSum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return output;
}

module.exports = threeSum;
