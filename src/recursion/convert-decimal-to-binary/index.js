/**
 * Converting Decimal to Binary
 *
 * Write a Recursive Procedure to Convert a Decimal Number to a Binary Equivalent.
 *
 * Input: 27
 * Output: 11011
 *
 */

// Time complexity O(log n)
// Space complexity O(log n)
function decimalToBinary(decimal) {
  if (decimal === '0') {
    return '0';
  }

  return decimalRecursive(Math.floor(decimal / 2)) + (decimal % 2);
}

function decimalRecursive(decimal) {
  if (decimal === 0) return '';

  return decimalRecursive(Math.floor(decimal / 2)) + (decimal % 2);
}

module.exports = decimalToBinary;
