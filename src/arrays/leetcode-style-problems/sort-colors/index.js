/**
 * Sort Colors
 * Link: https://leetcode.com/problems/sort-colors/
 */
function sortColors(arr) {
  if (arr.length === 1) return arr;

  let i = 0;
  let left = 0;
  let right = arr.length - 1;

  while (i <= right) {
    if (arr[i] === 0) {
      [arr[i], arr[left]] = [arr[left], arr[i]];
      left++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[right]] = [arr[right], arr[i]];
      right--;
    }
  }

  return arr;
}
