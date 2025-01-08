/**
 * Minimum Size Subarray Sum
 * Link: https://leetcode.com/problems/minimum-size-subarray-sum/description/
 */
function findMinSubArray(s, arr) {
  let windowStart = 0;
  let sum = 0;
  let min = Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const currentElement = arr[windowEnd];

    sum += currentElement;

    // when the sum is >= s, try to shrink the window
    // reduce the window by updating windowStart, but subtracting windowStart

    while (sum >= s) {
      let currentWindowSize = windowEnd - windowStart + 1;

      min = Math.min(min, currentWindowSize);

      sum -= arr[windowStart];

      windowStart += 1;
    }
  }

  return min === Infinity ? 0 : min;
}

module.exports = findMinSubArray;
