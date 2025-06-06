/**
 * Shortest Way to Form String
 * Link: https://leetcode.com/problems/shortest-way-to-form-string/description/
 */
function shortestWay(source, target) {
  let i = 0;
  let count = 0;

  while (i < target.length) {
    let prevI = i;

    for (let char of source) {
      if (i < target.length && char === target[i]) {
        i++;
      }
    }

    if (prevI === i) {
      return -1; // no progress, means it's not possible
    }

    count++;
  }

  return count;
}
