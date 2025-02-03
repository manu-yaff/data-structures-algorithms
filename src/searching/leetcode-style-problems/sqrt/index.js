/**
 * Sqrt(x)
 * Link: https://leetcode.com/problems/sqrtx/description/
 */
function mySqrt(n) {
  if (n === 0) return 0;

  let left = 1;
  let right = n;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    const squared = mid * mid;

    if (squared === n) {
      return mid;
    } else if (squared > n) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  return result;
}
