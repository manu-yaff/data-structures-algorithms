/**
 * Bubble sort
 *
 * Assuming items are sorted in increasing-order
 *
 * Idea:
 * - in each iteration move the biggest element to the end of the array and repeat
 * the process for each element in the list
 */

// Time complexity O(n^2)
// Space complexity O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      let currentIndex = j;
      let nextIndex = j + 1;

      if (arr[currentIndex] > arr[nextIndex]) {
        let temp = arr[currentIndex];
        arr[currentIndex] = arr[nextIndex];
        arr[nextIndex] = temp;
        swap = true;
      }
    }

    if (swap === false) return arr;
  }

  return arr;
}

module.exports = bubbleSort;
