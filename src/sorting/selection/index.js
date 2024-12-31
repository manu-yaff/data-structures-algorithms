/**
 * Sorts array in ascending order with selection sort algorithm. Modifies the array
 * in place
 * @param {array} list The list to be sorted
 * @returns {array} The list sorted in ascending order
 */
function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let maxIndex = 0;
    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[maxIndex]) {
        maxIndex = j;
      }
    }

    let temp = list[list.length - 1 - i];
    list[list.length - 1 - i] = list[maxIndex];
    list[maxIndex] = temp;
  }

  return list;
}

module.exports = selectionSort;
