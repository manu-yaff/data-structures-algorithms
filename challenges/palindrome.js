/**
 * Write a function called isPalindrome which returns true if the string passed
 * to it is a palindrome (reads the same forwards and backwards). Otherwise it
 * returns false 
 * 
 * Input: 'tacocat'
 * Output: true
 */

// Time Complexity O(n)
// Space Complexity O(1)

// Procedure isPalindrome
// Input: str: String
  // if str.length < 2
    // return true
  // end if
  // if str[0] != str[str.length-1]
    // return false
  // end if
  // return isPalindrome(str.slice(1,str.length - 1))

function isPalindrome (str) {
  let len = str.length
  if (len < 2) return true
  if (str[0] !== str[len - 1]) return false
  return isPalindrome(str.slice(1, len - 1))
}