/**
 * Function that calculates the factorial of a given number using recursion
 */

function factorial (num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}