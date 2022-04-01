/**
 * Write a function called capitalizeWords. Given an array of words, return a new
 * array containing each word capitalized
 */

// Time Complexity O(n)
// Space Complexity O(n)

// Procedure capitalizeWords
// Input: arr: Array
  // if not arr.length, return []
  // return [arr[0].toUpperCase(), ...capitalizeWords(arr.rest)]

const capitalizeWords = ([first, ...rest]) => {
  if (!first) return []
  return [first.toUpperCase(), ...capitalizeWords(rest)]
}