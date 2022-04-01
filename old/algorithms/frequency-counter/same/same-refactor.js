/**
 * Write a function called 'same', which accepts two arrays.
 * The function should return true if if every value in the array has it's
 * corresponding value squared in the second array. The frequency of values must
 * be the same.
 * Example:
 * Input: [1,2,3], [4,1,9]
 * Output: true
 * Input: [1,2,3], [1,9]
 * Output: false
 * Input: [1,2,1], [4,4,1]
 * Output: false (must be the same frequency)
 */

// navie approach using indexOf: O(n^2)

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2)
    if (index === -1) {
      return false
    }
    arr2.splice(index,1)
  }

  return true
}