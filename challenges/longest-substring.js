/**
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest subtring with all distintic characters
 * 
 * Input: 'rithmschool'
 * Output: 7
 */

// Time Completixy: O(n)
// Space Complexity: O(1)

// Input: s: String
  // length <- 0
  // lookup <- {}
  // i <- 0
  // j <- 0
  // tempLength <- 0
  // if not s
    // return 0
  // end if
  // while j < s.length and i < s.length do
    // tempLength <- tempLength + 1
    // if lookup[s[j]]
      // length <- Max(length, tempLength)
      // tempLength <- 0
      // lookup <- {}
      // i <- i + 1
      // j <- i
    // else
      // lookup[s[j]] = 1
      // j <- j + 1
    // end if
  // end while
  // length <- Max(length, tempLength)
  // return length

function findLongestSubstring (s) {
  let length = 0
  let lookup = {}
  let i = 0
  let j = 0
  let tempLength = 0

  if (!s) return 0

  while (j < s.length && i < s.length) {
    if (lookup[s[j]]) {
      length = Math.max(length, tempLength)
      tempLength = 0
      lookup = {}
      i += 1
      j = i
    } else {
      tempLength += 1
      lookup[s[j]] = 1
      j += 1
    }
  }
  length = Math.max(length, tempLength)

  return length
}

// Time Completixy: O(n)
// Space Complexity: O(1)
function findLongestSubstring2 (s) {
  let first = 0
  let second = 0
  let max = 0

  let set = new Set()
  while (second < s.length) {
    if (!set.has(s[second])) {
      set.add(s[second])
      second++
      max = Math.max(set.size, max)
    } else {
      set.delete(s[first])
      first++
    }
  }
  return max
}
