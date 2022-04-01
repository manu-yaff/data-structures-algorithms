/**
 * Write a function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns when passed
 * to the callback. Otherwise it returns false
 * 
 * Input: ([1,2,3,4], isOdd)
 * Output: true
 */

// Time Complexity O(n)
// Space Complexity O(1)

// Procedure someRecursive
// Input: arr:Array, callback: Callback
  // if arr.length == 0
    // return false
  // end if  
  // if callback(arr[0])
    // return true
  // end if
  // return someRecursive(arr.slice(1))

function someRecursive (arr, callback) {
  if (arr.length === 0) return false
  if (callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}
  