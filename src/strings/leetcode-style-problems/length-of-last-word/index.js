/**
 * Length of Last Word
 * Link: https://leetcode.com/problems/length-of-last-word/description/
 */
function lengthOfLastWord(s) {
  const array = s.trim().split(' ');
  return array[array.length - 1].length;
}
