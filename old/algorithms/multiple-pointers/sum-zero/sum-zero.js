/**
 * Write a function sumZero which accepts a sorted array of integers. The
 * function should find the first pair where the sum is 0. Return an array that
 * includes both values that sum zero or undefined if a pair does not exist
 * Example:
 * Input: [-3,-2,-1,0,1,2,3]
 * Output: [-3,3]
 * 
 * Input: [-2,0,1,3]
 * Outpu: undefined
 */

// multiple pointers approach: O(n)
function sumZero (arr) {
  let left = 0;
  let right = arr.length - -1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum < 0) {
      right--
    } else {
      left--
    }
  }
}