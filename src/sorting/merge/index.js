/**
 * Merge sort
 *
 * Assuming items are sorted in increasing-order
 *
 * Idea:
 *
 * - get the left and right arrays
 * - sort the left and right arrays
 * - merged the sorted versions of the arrays
 *
 */

// Time complexity O(n log n)
// Space complexity O(n)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // get left and right arrays
  let middle = Math.floor(arr.length / 2);
  let leftArray = arr.slice(0, middle);
  let rightArray = arr.slice(middle);

  // sort both arrays
  let sortedLeftArray = mergeSort(leftArray);
  let sortedRightArray = mergeSort(rightArray);

  // merge both sorted arrays
  return merge(arr, sortedLeftArray, sortedRightArray);
}

// merge the two arrays
function merge(arr, leftArray, rightArray) {
  let originalIndex = 0;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      arr[originalIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      arr[originalIndex] = rightArray[rightIndex];
      rightIndex++;
    }

    originalIndex++;
  }

  while (leftIndex < leftArray.length) {
    arr[originalIndex] = leftArray[leftIndex];
    leftIndex++;
    originalIndex++;
  }

  while (rightIndex < rightArray.length) {
    arr[originalIndex] = rightArray[rightIndex];
    rightIndex++;
    originalIndex++;
  }

  return arr;
}

module.exports = mergeSort;
