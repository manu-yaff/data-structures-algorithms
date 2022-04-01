/**
 * Write a function called reverse which accepts a string and returns a new
 * string in reverse
 * 
 * Input: awesome
 * Output: emosewa
 */

// Time Complexity: O(n)
// Space Complexity: O(1)

// Procedure: reverse
// Input: s: String
  // if s.length < 2 
    // return s
  // end if
  // return reverse(s.slice()) + s[0]

function reverse(s) {
  if (s.length < 2) return s
  return reverse(s.slice(1)) + s[0]
}
