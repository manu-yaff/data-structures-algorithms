/**
 * Binary search
 *
 * pre:
 * - list items must be sorted
 *
 * idea:
 * - find the middle point between left and right pointers. If item in middle is
 * less or equal than target, move left pointer on position, otherwise move right pointer one position
 *
 */

// Time complexity O(log n)
// Space complexity O(1)
function binarySearch(list, item) {
  let left = 0;
  let right = list.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (list[middle] === item) {
      return middle;
    }

    if (list[middle] > item) {
      right = middle - 1;
    }

    if (list[middle] <= item) {
      left = middle + 1;
    }
  }

  return -1;
}

function binarySearchRecursive(list, target, left, right) {
  if (right < left) {
    return -1;
  }

  let middle = Math.floor((left + right) / 2);

  if (list[middle] === target) {
    return middle;
  }

  if (list[middle] > target) {
    return binarySearchRecursive(list, target, left, middle + 1);
  }

  if (list[middle] <= target) {
    return binarySearchRecursive(list, target, middle + 1, right);
  }
}

module.exports = {
  binarySearch,
  binarySearchRecursive,
};
