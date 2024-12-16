/**
 * Number of Students Unable to Eat Lunch
 *
 * You are given two integer arrays students and sandwiches where sandwiches[i]
 * is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack)
 * and students[j] is the preference of the j​​​​​​th student in the initial queue
 * (j = 0 is the front of the queue). Return the number of students that are unable
 * to eat
 *
 * Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
 * Output: 0
 *
 */

// Time complexity O(n)
// Space complexity O(1)
function countStudents(students, sandwiches) {
  let preferenceForZeroCount = 0;
  let preferenceForOneCount = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i] === 1) {
      preferenceForOneCount += 1;
    } else {
      preferenceForZeroCount += 1;
    }
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 1) {
      if (preferenceForOneCount > 0) {
        preferenceForOneCount -= 1;
      } else {
        return sandwiches.length - i;
      }
    } else {
      if (preferenceForZeroCount > 0) {
        preferenceForZeroCount -= 1;
      } else {
        return sandwiches.length - i;
      }
    }
  }

  return preferenceForOneCount + preferenceForZeroCount;
}

/////////////////////// another solution

// Time complexity O(n^2)
// Space complexity O(1)
// function countStudents (students, sandwiches) {
//   let i = 0;
//   let counter = 0;

//   students = students.reverse();
//   sandwiches = sandwiches.reverse();

//   while (students.length > 0 && counter < students.length) {
//     if (students[students.length - 1] === sandwiches[sandwiches.length - 1]) {
//       students.pop();
//       sandwiches.pop();
//       counter = 0;
//     } else {
//       let temp = students.pop();
//       students.unshift(temp);
//       counter = counter + 1;
//     }
//   }

//   return students.length;
// };

module.exports = countStudents;
