/**
 * Write a function called nestedEvenSum. Return the sum of all even numbers in
 * an object which may contain nested objects
 */

// Time Complexity O(n^2)
// Space Complexity O(1)

// Procedure nestedEvenSum
// Input: obj: Object, sum = 0: Integer
  // for each key
    // if obj[key] is Object
      // sum <- sum + nestedEvenSum
    // else if obj[key] is Number and obj[key] % 2 == 0
      // sum <- sum + obj[key]
    // end if
  // end for
  // return sum

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
