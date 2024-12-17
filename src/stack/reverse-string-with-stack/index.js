/**
 * Reverse a String
 *
 * Given a string, write a function that uses a stack to reverse the string.
 * The function should return the reversed string.
 *
 * Input: "Hello, World!"
 * Output: "!dlroW ,olleH"
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function reverseString(s) {
  if (s.length === 1) return s;

  const stack = [];

  for (const char of s) {
    stack.push(char);
  }

  let output = '';

  while (stack.length > 0) {
    output += stack.pop();
  }

  return output;
}

module.exports = reverseString;
