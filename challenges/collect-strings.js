/**
 * Write a function called collectStrings which accepts an object and returns an
 * array of all the values in the object that have a type of string
 * 
 * Input: 
  const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
  }
  collectStrings(obj)
 * Output:
  ["foo", "bar", "baz"])
 */

// Procedure collectStrings
// Input: obj: Object
// arr = []
// for each key in obj:
// if typeof obj[key] == String
// arr.push(obj[key])
// else
// collectStrings(obj[key])
// end for
// return arr

function collectStrings(obj) {
  let result = []
  function helper(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        result.push(obj[key])
        console.log('entra')
      } else {
        helper(obj[key])
      }
    }
  }
  helper(obj)
  return result
}
