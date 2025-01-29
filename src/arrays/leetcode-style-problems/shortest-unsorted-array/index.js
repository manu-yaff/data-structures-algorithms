/**
 * Shortest Unsorted Continuous Subarray
 * Link: https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/
 */
function findUnsortedSubarray(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  // case where the array is already sorted
  if (low === arr.length - 1) {
    return 0;
  }

  // find where right breaks
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find min and max
  let min = Infinity;
  let max = -Infinity;

  for (let i = low; i < high + 1; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }

  while (low > 0 && arr[low - 1] > min) {
    low -= 1;
  }

  while (high < arr.length - 1 && arr[high + 1] < max) {
    high += 1;
  }

  return high - low + 1;
}
