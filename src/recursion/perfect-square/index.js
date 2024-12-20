/**
 * Perfect square
 *
 * Write a Recursive Solution to Check if a Given Number is a Perfect Square or Not
 * A square number or perfect square is an integer that is the square of an integer;
 * in other words, it is the product of some integer with itself
 *
 * Input: 16
 * Input: true
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function isPerfectSquare(num) {
  if (num === 1) return true;

  return recursiveCall(num, 2);
}

function recursiveCall(number, candidate) {
  if (candidate === number) {
    return false;
  }

  if (Math.pow(candidate, 2) === number) {
    return true;
  }

  return recursiveCall(number, candidate + 1);
}

module.exports = isPerfectSquare;
