/**
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array. There can be negative numbers in
 * the array, but always sorted
 * Example:
 * Input: [1,1,1,1,1,2]
 * Output: 2
 * 
 * Input: [1,2,3,4,4,4,7,7,12,12,13]
 * Output: 7
 */


// multiple pointers approach: O(n)

// create unique counter object 
// set two pointers, at the beginning(left) and at the end(right)
// while left < right
  // if frequencyCounter[arr[left]]
    // move pointer
  // else if frequencyCounter[arr[right]]
    // move pointer
  // else
    // if arr[left] === arr[right]
      // if key does not exist
        // add the key of arr[left]
        // break loop
    // else
      // check if key in arr[left] and arr[right] do not exist
        // set value to 1
        // move both pointers
  // return number of keys in object

function countUniqueValues (arr) {
  let uniqueValues = {}
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let keyLeft = arr[left]
    let keyRight = arr[right]

    if (uniqueValues[keyLeft]) {
      left += 1
    } else if (uniqueValues[keyRight]) {
      right -= 1
    } else {
      if (arr[left] === arr[right]) {
        if (!uniqueValues[keyLeft]) uniqueValues[keyLeft] = 1
        break
      } else {
        if (!uniqueValues[keyLeft]) uniqueValues[keyLeft] = 1
        if (!uniqueValues[keyRight]) uniqueValues[keyRight] = 1 
        left += 1
        right -= 1
      }
    }
  }
  return Object.keys(uniqueValues).length
}