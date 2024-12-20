/**
 * Check Prime
 *
 * Write a recursive solution to check if a given number is a prime number
 *
 * Input: 7
 * Output: true
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function isPrime(number) {
  if (number <= 1) return false;

  return recursiveCall(number, number - 1);
}

function recursiveCall(original, divisor) {
  if (divisor === 1) return true;
  if (original % divisor === 0) return false;

  return recursiveCall(original, divisor - 1);
}

module.exports = isPrime;
