/**
 * Insertion sort
 *
 * Assuming items are sorted in increasing-order
 *
 * Idea:
 * - start from the second element, for each element find its right position
 * - if the element is less than the element in the sorted part, move it until
 * the ideal position is found
 */

// Time complexity O(n^2)
// Space complexity O(1)
function insertionSort(arr) {
  if (arr.length === 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];

      arr[j] = arr[j - 1];
      arr[j - 1] = temp;

      j--;
    }
  }

  return arr;
}

module.exports = insertionSort;
