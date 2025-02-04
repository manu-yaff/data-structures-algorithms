/**
 * First Bad Version
 * Link: https://leetcode.com/problems/first-bad-version/
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;
    let ans = -1;

    while (left <= right) {
      const mid = Math.floor((right + left) / 2);
      if (isBadVersion(mid)) {
        right = mid - 1;
        ans = mid;
      } else {
        left = mid + 1;
      }
    }

    return ans;
  };
}
