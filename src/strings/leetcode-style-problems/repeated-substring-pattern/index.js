/**
 * Repeated Substring Pattern
 * Link: https://leetcode.com/problems/repeated-substring-pattern/description/
 */
function repeatedSubstringPattern(s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let substring = s.substring(0, i + 1);

    const temp = substring.repeat(Math.floor(s.length / substring.length));

    if (temp === s) return true;
  }

  return false;
}
