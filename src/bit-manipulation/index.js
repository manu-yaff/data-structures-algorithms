/**
 * 191. number of 1 bits
 * link: https://leetcode.com/problems/number-of-1-bits/description/
 */
function hammingWeight(n) {
  const binaryString = n.toString(2);

  const setBits = binaryString.split('').filter((x) => x === '1');

  return setBits.length;
}
