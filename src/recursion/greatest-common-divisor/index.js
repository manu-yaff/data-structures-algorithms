/**
 * Write recursive code to calculate the Greatest Common Divisor (GCD) of Two Positive Numbers.
 *
 * Input: a = 12, b = 18
 * Output: 6
 *
 */

// Time complexity O(log(min(a,b)))
// Space complexity O(log(min(a,b)))
function calculateGCD(a, b) {
  if (a % b === 0) {
    return b;
  }

  const min = Math.min(a, b);
  const max = min === a ? b : a;

  return calculateGCD(min, max % min);
}

module.exports = calculateGCD;
