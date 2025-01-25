/**
 * 3Sum
 * Link: https://leetcode.com/problems/3sum/description/
 */
function threeSum(arr) {
  const result = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    while (left < right) {
      const current = arr[i];
      const leftNumber = arr[left];
      const rightNumber = arr[right];

      const sum = current + leftNumber + rightNumber;

      if (sum === 0) {
        result.push([current, leftNumber, rightNumber]);

        left++;

        while (arr[left] === arr[left - 1] && left < right) {
          left++;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}

module.exports = threeSum;
