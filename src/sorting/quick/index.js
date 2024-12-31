/**
 * Sorts the list in ascending order using quick sort algorithm
 * @param {Array} list The list to be sorted
 * @returns {Array} The list sorted in increasing order
 */
function quickSort(list) {
  const first = 0;
  const last = list.length - 1;

  return quickSortHelper(list, first, last);
}

/**
 * Recursively calls the quick sort algorithms, for left and right partition
 * until the first and right indexes cross
 * @param {Array} list The Original list
 * @param {number} first The index which indicates the start of the list
 * @param {number} last The index which indicates the end of the list
 * @returns {Array} The list where elements to the left of pivot are smaller
 * and elements to its right are equal or bigger
 */
function quickSortHelper(list, first, last) {
  if (first < last) {
    const pivot = partition(list, first, last);

    quickSortHelper(list, first, pivot - 1);
    quickSortHelper(list, pivot + 1, last);
  }

  return list;
}

function partition(list, first, last) {
  // we need first and last, to know which are the limits of our list, since we
  // are modifying the list in place
  let pivotIndex = last;
  let j = first;
  let i = j - 1;

  // from the beginning of the list until the pivot index
  // if item is less than pivot value, move it to the next left index (which is 'i')
  while (j < pivotIndex) {
    if (list[j] < list[pivotIndex]) {
      i++;

      let temp = list[i];
      list[i] = list[j];
      list[j] = temp;
    }
    j++;
  }

  // move pivot to its position, that'll be i + 1, which means all elements to the
  // left are smaller
  i++;
  let aux = list[i];
  list[i] = list[j];
  list[j] = aux;

  return i;
}

quickSort([54, 26, 93, 17, 77, 31, 44, 55, 20]);

module.exports = quickSort;
