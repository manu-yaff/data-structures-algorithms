/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase or name formed by
 * rearranging the letters of another, such as `cinema`, formed from iceman
 * Assume the string contains only lower case alphabets
 * Example:
 * Input: '', ''
 * Output: true
 * 
 * Input: 'aaz', 'zza'
 * Output: false
 * 
 * Input: 'anagram', 'nagaram'
 * Output: true
 * 
 * Input: 'rat', 'cat'
 * Output: false
 * 
 * Input: 'awesome', 'awesom'
 * Output: false
 */

// frequency counter approach O(n)

// create objects to count frequency of chars
// if string's length are not equal, then return false
// if both strings are empty, then return true
// else
  // count number of each char in both strings
  // loop through any frequency counter checking that each key has the value in
  // both counters
  // if at some key they differ, return true
  // else, return false

function validAnagram (s1, s2) {
  let freqCount1 = {}
  let freqCount2 = {}

  if (s1.length !== s2.length) {
    return false
  }

  if (!s1 && !s2) {
    return true
  }

  for (let i = 0; i < s1.length; i++) {
    freqCount1[s1[i]] = (freqCount1[s1[i]] || 0) + 1
  }

  for (let i = 0; i < s2.length; i++) {
    freqCount2[s2[i]] = (freqCount2[s2[i]] || 0) + 1
  }
  
  for (let key in freqCount1) {
    if (freqCount1[key] !== freqCount2[key]) {
      return false
    }
  }

  return true
}