/**
 * Find the Middle Index in Array
 * Link: https://leetcode.com/problems/find-the-middle-index-in-array/description/
 */
function findMiddleIndex(nums) {
  const leftSumArray = getLeftSumArray(nums);
  const rightSumArray = getRightSumArray(nums);

  for (let i = 0; i < nums.length; i++) {
    if (leftSumArray[i] === rightSumArray[i]) {
      return i;
    }
  }

  return -1;
}

function getLeftSumArray(array) {
  const leftArray = new Array(array.length).fill(null);

  for (let index = 0; index < array.length; index++) {
    if (index === 0) {
      leftArray[index] = 0;
    } else {
      leftArray[index] = leftArray[index - 1] + array[index - 1];
    }
  }

  return leftArray;
}

function getRightSumArray(array) {
  const rightArray = new Array(array.length).fill(null);

  for (let index = array.length - 1; index >= 0; index--) {
    if (index === array.length - 1) {
      rightArray[index] = 0;
    } else {
      rightArray[index] = rightArray[index + 1] + array[index + 1];
    }
  }

  return rightArray;
}

module.exports = findMiddleIndex;
