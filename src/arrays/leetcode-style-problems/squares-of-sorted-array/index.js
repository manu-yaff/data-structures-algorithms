/**
 * Squares of a Sorted Array
 * Link: https://leetcode.com/problems/squares-of-a-sorted-array/description/
 */
function sortedSquares(arr) {
  const n = arr.length;

  const result = new Array(n);

  let biggestIndex = n - 1;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const leftSquared = arr[left] * arr[left];
    const rightSquared = arr[right] * arr[right];

    if (leftSquared > rightSquared) {
      result[biggestIndex] = leftSquared;
      left++;
    } else {
      result[biggestIndex] = rightSquared;
      right--;
    }
    biggestIndex--;
  }

  return result;
}
