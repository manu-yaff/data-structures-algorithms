/**
 * Write a function called isSubsequence which takes in two strings and checks
 * whether the characters in the first string form a subsequence of characters
 * in the second string. In other words, the function should check whether the
 * characters in the first string appear somewhere in the second string, without
 * their order changing
 * 
 * Input: 'hello', 'hello world'
 * Output: true
 */

// Multiple pointers approach

// Time Complexity O(n)
// Space Complexity O(1)

// Input: s1: String, s2: String
  // start1 <- 0
  // start2 <- 0
  
  // while start2 < s2.length
    
    // if s2[start2] == s1[start1]
      // start1 = start1 + 1
    // end if

    // if start1 == s1.length
      // return true
    // end if
    
    // start2++
  
  // end while

  // return false

function isSubsequence (s1, s2) {
  let start1 = 0
  let start2 = 0

  if(!s1) return true
  while (start2 < s2.length) {
    if (s2[start2] === s1[start1]) start1++
    if (start1 === s1.length) return true
    start2++
  }
  return false
}