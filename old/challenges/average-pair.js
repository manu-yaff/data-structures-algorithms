/**
 * Write a function called averagePair. Given a sorted array of integers and a
 * target average, determine if there is a pair of values in the array where
 * the average of the pair equals the target average. There may be more than one
 * pair that matches the average target
 */


// Multiple pointers approach
// Time Complexity O(n)
// Space Complexity O(1)

// Input: a: Array, target: Integer
  // start <- 0
  // end <- a.length - 1
  // if a is empty
    // return false
  // while start < end do
    // average = a[start] + a[end] / 2
    // if average == target
      // return true
    // else if average > target
      // end--
    // else 
      // start++
    // end if
  // end while
  // return false

function averagePair (a, target) {
  let start = 0
  let end = a.length - 1
  if (a.length === 0) return false
  while (start < end) {
    let average = (a[start] + a[end]) / 2
    if (average === target) {
      return true
    } else if (average > target) {
      end--
    } else {
      start++
    }
  }
  return false
}

