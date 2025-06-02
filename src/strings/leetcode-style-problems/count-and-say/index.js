/**
 * Count and Say
 * Link: https://leetcode.com/problems/count-and-say/description/
 */
function countAndSay(n) {
  let current = '1';

  for (let i = 0; i < n - 1; i++) {
    current = compress(current);
  }

  return current;
}

function compress(str) {
  let left = 0;
  let right = 1;
  let result = '';

  while (left < str.length) {
    while (str[left] === str[right]) {
      right++;
    }

    const times = right - left;

    result = result + times.toString() + str[left];

    left = right;
    right = left + 1;
  }

  return result;
}
