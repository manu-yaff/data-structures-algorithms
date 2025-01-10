/**
 * Valid Palindrome
 * Link: https://leetcode.com/problems/valid-palindrome/description/
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/[a-zA-Z0-9]/.test(s[left])) {
      left++;
      continue;
    }

    if (!/[a-zA-Z0-9]/.test(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
}

module.exports = isPalindrome;
