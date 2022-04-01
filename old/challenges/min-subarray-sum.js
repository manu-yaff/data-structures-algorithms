/**
 * Write a function called minSubArrayLen which accepts two parameters - an
 * array of positive integers and a positive numbers.
 * This function should return the minimal length of a contiguous subarray of
 * which the sum is grater than or equal to the integrer passed to the function.
 * If there isn't one, return 0
 * 
 * Input: ([2,3,1,2,4,3],7)
 * Output: 2 -> because [4,3] is the smallest sub array that follows the rule
 */

// Time Complexity: O(n)
// Space Complexity: O(1)

// Input: arr: Array, num: Integer
  // minLength <- arr.length
  // tempSum <- 0
  // i <- 0
  // j <- 0
  // currentLength <- 0
  // while i < arr.length && j < arr.length do
    // currentLength <- currentLength + 1
    // tempSum <- tempSum + arr[j]
    // if tempSum > num
      // minLength <- min(minLength, currentLength)
      // i <- i + 1
      // j <- i
      // currentLength <- 0
      // tempSum <- 0
    // else
      // j <- j + 1
    // end if 
  // end while
  // if minLength == arr.length return 0, else return minLength
 

function minSubArrayLen (arr, num) {
  let minLength = arr.length
  let tempSum = 0
  let i = 0
  let j = 0
  let currentLength = 0
  while (i < arr.length && j < arr.length) {
    currentLength += 1
    tempSum += arr[j]
    if (tempSum >= num) {
      minLength = Math.min(currentLength, minLength)
      i += 1
      j = i
      currentLength = 0
      tempSum = 0
    } else {
      j++
    }
  }
  return minLength == arr.length ? 0 : minLength
}
  