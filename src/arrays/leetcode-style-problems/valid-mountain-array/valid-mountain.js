/**
 * Valid Mountain Array
 * Link: https://leetcode.com/problems/valid-mountain-array/description/
 */
function validMountainArray(arr) {
  if (arr.length < 3) return false;

  let i = 0;

  // find the peak
  while (i + 1 <= arr.length - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // validate the peak
  // case is always increasing
  // case is always decreasing, i = 0
  if (i === arr.length - 1 || i === 0) {
    return false;
  }

  while (i + 1 <= arr.length - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === arr.length - 1;
}
