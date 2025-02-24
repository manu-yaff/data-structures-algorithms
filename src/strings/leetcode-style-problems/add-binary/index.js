/**
 * Add Binary
 * Link: https://leetcode.com/problems/add-binary/description/
 */
function addBinary(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  const result = [];

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (a[i]) sum += parseInt(a[i]);
    if (b[j]) sum += parseInt(b[j]);

    result.push(sum % 2);

    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  if (carry) result.push(carry);

  return result.reverse().join('');
}

// another solution
function addBinary(a, b) {
  const aDecimal = BigInt('0b' + a);
  const bDecimal = BigInt('0b' + b);

  const rDecimal = aDecimal + bDecimal;

  return rDecimal.toString(2);
}
