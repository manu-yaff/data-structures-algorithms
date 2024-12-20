/**
 * Number frequency
 *
 * Given an array of integers and a key element, write a recursive solution to count the occurrences of the key element in the array
 *
 * Input:
 *
 * array: [2, 4, 6, 8, 4]
 * key: 4
 *
 * Output: 2
 */

// Time complexity O(n)
// Space complexity O(n)
function countOccurrences(arr, key) {
  if (arr.length === 0) return 0;

  if (arr.length === 1 && arr[0] === key) return 1;

  return recursiveCall(arr, key, 0);
}

function recursiveCall(arr, k, index) {
  if (index === arr.length) return 0;

  if (arr[index] === k) {
    return 1 + recursiveCall(arr, k, index + 1);
  }

  return 0 + recursiveCall(arr, k, index + 1);
}

module.exports = countOccurrences;
