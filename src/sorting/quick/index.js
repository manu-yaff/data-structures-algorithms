/**
 * Quick sort
 *
 * Assuming items are sorted in increasing-order
 *
 * Idea:
 *
 * - find a pivot, then move smaller elements to the left, and bigger ones to the
 * right. At the end of every iteration, pivot is already in its correct position.
 * Then repeat the process for the left and right sub arrays
 * - to move the elements, if current element is less than pivot, increment pointer i
 * and interchange element at i for element at j
 * at the end swap pivot for the element at position 1 + 1
 */

// Time complexity O(n^2)
// Space complexity O(log n)
function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);

    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1; // index of the smallest element

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // move the pivot to the right of the last smallest element
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

module.exports = quickSort;
