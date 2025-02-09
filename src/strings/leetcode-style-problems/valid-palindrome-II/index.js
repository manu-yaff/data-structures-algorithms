/**
 * Valid Palindrome II
 * Link: https://leetcode.com/problems/valid-palindrome-ii/
 */
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
}

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isPalindrome(s.substring(left + 1, right + 1)) ||
        isPalindrome(s.substring(left, right))
      );
    }

    left++;
    right--;
  }

  return true;
}
