/**
 * Is Subsequence
 * Link: https://leetcode.com/problems/is-subsequence/description/
 */
function isSubsequence(s, t) {
  let sP = 0;
  let tP = 0;

  if (s.length === 0) return true;
  if (s === t) return true; // this includes an empty string

  while (tP < t.length) {
    if (t[tP] === s[sP]) {
      sP++;
    }

    tP++;
  }

  return sP >= s.length;
}
