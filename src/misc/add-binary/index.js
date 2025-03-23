/*
 * Add Binary
 * Link: https://leetcode.com/problems/add-binary/description/
 */
function getNewBit(sum) {
  return sum % 2;
}

function getCarry(sum) {
  return Math.floor(sum / 2);
}

function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;

  let result = '';

  let carry = 0;

  while (i >= 0 || j >= 0 || carry != 0) {
    const bit1 = i < 0 ? 0 : parseInt(a[i]);
    const bit2 = j < 0 ? 0 : parseInt(b[j]);

    const sum = bit1 + bit2 + carry;
    const bit = getNewBit(sum);
    carry = getCarry(sum);

    result = bit + result;

    i--;
    j--;
  }

  return result;
}
