/**
 * Write a function called stringifyNumbers which takes in an object and finds
 * all of the values which are numbers and converts them to strings
 * 
 * Input: 
 * let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }
 * Output:
      let obj = {
        num: "1",
        test: [],
        data: {
            val: "4",
            info: {
                isRight: true,
                random: "66"
            }
        }
    } 
 */

// Procedure stringifyNumbers
// Input: obj: Object
// for each key in obj do
// if obj[key] is Number
// obj[key] = obj[key].toString()
// end if
// if obj[key] is Object and obj[key] is not Array
// obj[key] = stringifyNumbers(obj[key])
// end if
// end for
// return

const stringifyNumbers = obj => {
  let newObj = {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
