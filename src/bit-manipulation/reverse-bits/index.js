/**
 * Reverse Bits
 * Link: https://leetcode.com/problems/reverse-bits/description/
 */
function reverseBits(n) {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    // shift to left by one, get the last bit from n
    // add bit to the right most place
    res = (res << 1) | (n & 1);
    n = n >>> 1;
  }

  return res >>> 0;
}
