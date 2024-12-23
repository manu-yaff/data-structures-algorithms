/**
 * Sequential search
 *
 * Idea:
 * - Iterate through the list checking if the current element is equal to given
 * element, if so return the index of the element. Otherwise, return -1
 *
 */

// Time complexity O(n)
// Space complexity O(1)
function sequentialSearch(list, item) {
  if (list.length === 0) return -1;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return i;
    }
  }

  return -1;
}

module.exports = sequentialSearch;
