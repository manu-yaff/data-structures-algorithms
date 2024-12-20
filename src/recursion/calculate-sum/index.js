/**
 * Basic sum
 *
 * Calculate the Sum of the First N Natural Numbers Using a Recursive Approach.
 * The sum of first N natural numbers is equal to N + (N-1) + (N-2) + ... + (3) + (2) + (1)
 *
 * Input: 5
 * Output: 15
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function calculateSum(n) {
  if (n === 1) return 1;

  return n + calculateSum(n - 1);
}

module.exports = calculateSum;
