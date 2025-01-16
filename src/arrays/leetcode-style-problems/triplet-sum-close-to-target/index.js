/*
 * 3Sum Closest
 * https://leetcode.com/problems/3sum-closest/description/
 */
function threeSumClosest(arr, target) {
  arr.sort((a, b) => a - b);

  let minSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      let currentDiff = Math.abs(currentSum - target);

      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        minSum = currentSum;
      } else if (currentDiff === minDiff) {
        if (currentSum < minSum) {
          minSum = currentSum;
        }
      }

      if (currentSum > target) {
        right--;
      } else if (currentSum < target) {
        left++;
      } else {
        left++;

        while (arr[left] === arr[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return minSum;
}

module.exports = threeSumClosest;
