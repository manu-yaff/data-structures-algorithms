/**
 * Selection sort
 *
 * Assuming items are sorted in increasing-order
 *
 * Idea:
 * - move the smallest element to the beginning
 * - keep track of the min, at the end of the second loop, we swap the smallest
 * value with the current position of the first loop
 *
 */

// Time complexity O(n^2)
// Space complexity O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentMinIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMinIndex]) {
        currentMinIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[currentMinIndex];
    arr[currentMinIndex] = temp;
  }

  return arr;
}

module.exports = selectionSort;
