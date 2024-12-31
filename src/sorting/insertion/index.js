/**
 * Sorts array using insertion sort algorithm. Modifies the array in place
 * @param {Array} list The list to be sorted
 * @returns {Array} The list sorted in increasing order
 */
function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i;

    while (j >= 1 && list[j] < list[j - 1]) {
      let temp = list[j - 1];
      list[j - 1] = list[j];
      list[j] = temp;

      j--;
    }
  }

  return list;
}

module.exports = insertionSort;
