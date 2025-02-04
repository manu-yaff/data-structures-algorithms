/**
 * Peak Index in a Mountain Array
 * Link: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */
function peakIndexInMountainArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid] > arr[mid + 1]) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return index;
}
