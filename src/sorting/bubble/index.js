/**
 * Sorts array in ascending order with bubble sort algorithm. Modifies the array
 * in place
 * @param {array} list The list to be sorted
 * @returns {array} The list sorted in ascending order
 */
function bubbleSort(list) {
  for (let j = 0; j < list.length; j++) {
    let swap = false;

    for (let i = 0; i < list.length - 1 - j; i++) {
      if (list[i] > list[i + 1]) {
        let temp = list[i + 1];
        list[i + 1] = list[i];
        list[i] = temp;
        swap = true;
      }
    }

    if (swap === false) {
      break;
    }
  }

  return list;
}

module.exports = bubbleSort;
