/**
 * 191. number of 1 bits
 * link: https://leetcode.com/problems/number-of-1-bits/description/
 */
function hammingWeight(n) {
  const binaryString = n.toString(2);

  const setBits = binaryString.split('').filter((x) => x === '1');

  return setBits.length;
}

// bit manipulation
// function hammingWeight(n) {
//   let count = 0;
//
//   while (n > 0) {
//     count += n & 1;
//     n = n >> 1;
//   }
//
//   return count;
// }
