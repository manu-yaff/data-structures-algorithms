/**
 * Implement a function called, areThereDuplicates which accepts a variable
 * number or arguments(numbers), and checks whether there are any duplicates among the 
 * arguments passed in
 * Input: (1,2,3)
 * Output: false
 * 
 * Input: (1,2,3)
 * Output: true
 */


// Frequency pattern approach
// Time Complexity O(n)
// Space Complexity O(n)

// Input: A:Array
  // counter <- Object
  // for i <- 0 to A.length do
    // if counter[A[i]] then
      // return false
    // else
      // counter[A[i]] = 1
    // end if
  // end for
  // return true

function areThereDuplicates () {
  let counter = {}
  for (let i = 0; i < arguments.length; i++) {
    if (counter[arguments[i]]) {
      return true
    } else {
      counter[arguments[i]] = 1
    }
  }
  return false
}


// Multiple pointers approach
// Time Complexity O(n)
// Space Complexity O(1)

// Input: args:Array
  // sort(args)
  // start <- 0
  // next <- 1
  // while next < args.length
    // if args[start] == args[next]
      // return true
    // end if
  // end while
  // return false

function areThereDuplicates2 (...args) {
  args.sort((a,b) => a - b)
  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// usgin a set
function areThereDuplicates3 () {
  return new Set(arguments).size !== arguments.length
}