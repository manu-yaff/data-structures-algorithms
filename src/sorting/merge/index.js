/**
 * Sorts array using merge sort algorithm. Modifies the array in place
 * @param {Array} list The list to be sorted
 * @returns {Array} The list sorted in increasing order
 */
function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  } else {
    const half = Math.floor(list.length / 2);

    const leftList = list.slice(0, half);
    const rightList = list.slice(half);

    return merge(list, mergeSort(leftList), mergeSort(rightList));
  }
}

/**
 * Merge two sorted lists in ascending order, updates the original list
 * @param {Array} original The list that will contain the ordered list
 * @param {Array} l1 First ordered list
 * @param {Array} l2 Second ordered list
 * @returns {Array} The list sorted in increasing order
 */
function merge(originalList, l1, l2) {
  let p1 = 0;
  let p2 = 0;
  let original = 0;

  while (p1 < l1.length && p2 < l2.length) {
    if (l1[p1] < l2[p2]) {
      originalList[original] = l1[p1];

      p1++;
    } else {
      originalList[original] = l2[p2];

      p2++;
    }

    original++;
  }

  while (p1 < l1.length) {
    originalList[original] = l1[p1];
    p1++;
    original++;
  }

  while (p2 < l2.length) {
    originalList[original] = l2[p2];
    p2++;
    original++;
  }

  return originalList;
}

module.exports = mergeSort;
