/**
 * Write a function called sameFrequency. Given two positive integers, find out
 * if the two numbers have the same frequency digits
 */

// Complexity O(n)
function sameFrequency (num1, num2) {
  let s1 = num1.toString().split("")
  let s2 = num2.toString().split("")

  if (s1.length !== s2.length) {
    return false
  }

  let lookup = {}

  s1.forEach(digit => lookup[digit] ? lookup[digit]+=1 : lookup[digit] = 1)

  for (let i = 0; i < s2.length; i++) {
    if (!lookup[s2[i]]) {
      return false
    } else {
      lookup[s2[i]] -= 1
    }
  }
  
  return true
}