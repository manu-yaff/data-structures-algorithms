/**
 * Implement a function called, areThereDuplicates which accepts a variable
 * number or arguments, and checks whether there are any duplicates among the 
 * arguments passed in
 * Input: (1,2,3)
 * Output: false
 * 
 * Input: (1,2,3)
 * Output: true
 */

// Time Complexity O(n)
// Space Complexity O(n)

// Input: A:Array
  // counter <- Object
  // for i <- 0 to A.length do
    // if counter[A[i]] then
      // return false
    // else
      // counter[A[i]] = 1
    // end if
  // end for
  // return true

function areThereDuplicates () {
  let counter = {}
  for (let i = 0; i < arguments.length; i++) {
    if (counter[arguments[i]]) {
      return true
    } else {
      counter[arguments[i]] = 1
    }
  }
  return false
}