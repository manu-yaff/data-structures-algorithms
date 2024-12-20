/**
 * Factorial
 *
 * Calculate the Factorial of a Positive Number Using Recursion
 *
 * Input: 5
 * Output: 120
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function calculateFactorial(num) {
  if (num === 1 || num === 0) return 1;

  return num * calculateFactorial(num - 1);
}

module.exports = calculateFactorial;
