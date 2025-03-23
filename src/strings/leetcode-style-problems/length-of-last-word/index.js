/**
 * Length of Last Word
 * Link: https://leetcode.com/problems/length-of-last-word/description/
 */
function lengthOfLastWord(s) {
  let count = 0;
  let start = s.length - 1;

  while (s[start] === ' ' && start >= 0) {
    start--;
  }

  while (s[start] !== ' ' && start >= 0) {
    count += 1;
    start--;
  }

  return count;
}
