/**
 * Write a function called flatten which accepts an array of arrays and returns
 * a new array with all the values flattened
 * 
 * Input: [1, [2, [3, 4], [[5]]]]
 * Output: [1,2,3,4,5]
 */

// Time Complexity O(n^2)
// Space Complexity O(n)

// Procedure flatten
  // Input: arr: Array
  // result <- []
  // Procedure helper
  // Input arr: Array
    // if (!arr.length) return []
    // if (isArray(arr[0]) return helper(arr[0]), else // result.push(arr[0])
    // helper(arr.slice(1))

function flatten ([first, ...rest]) {
  if (!first) return []
  if (typeof first === 'object') return [...flatten(first), ...flatten(rest)]
  return [first, ...flatten(rest)]
}