/**
 * Write a function called productOfArray which takes an array of numbers and 
 * returns the product of them all. Assume tha array has at least a number
 */

function productOfArray (arr) {
  if (arr.length === 0) return 1
  return arr[0] * productOfArray(arr.slice(1))
}