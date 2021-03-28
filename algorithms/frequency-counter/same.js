/**
 * Write a function called 'same', which accepts two arrays.
 * The function should return true if if every value in the array has it's
 * corresponding value squared in the second array. The frequency of values must
 * be the same.
 * Example:
 * Input: [1,2,3], [4,1,9]
 * Output: true
 * Input: [1,2,3], [1,9]
 * Output: false
 * Input: [1,2,1], [4,4,1]
 * Output: false (must be the same frequency)
 */

// naive approach: O(n^2)
// loop for each element of the first array
// loop for each element of the second array
// if element of second array is equal to squared of first one, then sifth array
// if array1 is empty, then return true
// else, return false
function same1 (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if ((array1[i] ** 2) === array2[j]) {
        array1.shift()
      }
    }
  }
  if (array1.length === 0) {
    return true;
  } else {
    return false;
  }
}

// sort approach: O(n)
// order both arrays
// if their length are not equal, then return false
// else
// loop through the arrays and shift in both
// if they do not follow the squared relation, then stop the loop 
// if both arrays are empty, return true
// else, return false
function same2(array1, array2) {
  array1.sort((a,b) => { return a - b })
  array2.sort((a,b) => { return a - b })

  if (array1.length !== array2.length) {
    return false
  }

  let element1 = 0
  let element2 = 0

  do {
    element1 = array1.shift()
    element2 = array2.shift()
  } while ((element1 ** 2) === element2)

  if (array1.length === 0 && array2.length === 0) {
    return true
  } else {
    return false
  }
}

// frequency counter with object approach: O(n)
// create two objects to count ocurrences: frequency1, frequency2
// loop through the first array and count ocurrences of each element
// loop through the second array and count ocurrences of each element
// loop through the first array
  // if frequency1[element]^2 equal to frequency2[element]
    // result is false 
  // else
    // do nothing
function same3(array1, array2) {
  let frequency1 = {}
  let frequency2 = {}
  let result = true;

  if (array1.length !== array2.length) {
    return false
  }

  array1.forEach(element => frequency1[element] = ++frequency1[element] || 1)
  array2.forEach(element => frequency1[element] = ++frequency1[element] || 1)

  array1.forEach(element => {
    if ((frequency1[element] ** 2) === frequency2[element]) {
      result = false
    }
  })

  return result;
}
// test naive approach
console.log('naive approach:')
console.log(same1([1,2,3,4], [1,4,9,16]))
console.log(same1([1,2,3], [1,9]))
console.log(same1([1,2,1], [4,4,1]))

// test sort approach
console.log('sort approach:')
console.log(same2([1,2,3,4], [1,4,9,16]))
console.log(same2([1,2,3], [1,9]))
console.log(same2([1,2,1], [4,4,1]))

// test frequency pattern with object approach
console.log('frequency pattern approach:')
console.log(same3([1,2,3,4], [1,4,9,16]))
console.log(same3([1,2,3], [1,9]))
console.log(same3([1,2,1], [4,4,1]))