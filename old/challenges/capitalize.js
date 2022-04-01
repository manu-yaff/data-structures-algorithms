/**
 * Write a function called capitalizeFirst. Given an array of strings, capitalize
 * the first letter of each string in the array
 */

// Time Complexity O(n^2)
// Space Complexity O(n)

// Procedure capitalizeFirst
// Input: arr: Array
  // first <- arr[0]
  // rest <- arr.slice(1)
  // if first is empty
    // return []
  // end if
  // return Array(first.toUpperCase() + first.slice(1), capitalizeFirst(rest))