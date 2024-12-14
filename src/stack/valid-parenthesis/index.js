/**
 * Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function isValid(s) {
  if (s.length === 1 || s.length % 2 !== 0) return false;

  const stack = [];

  for (const char of s) {
    if (isOpeningParenthesis(char)) {
      stack.push(char);
    } else {
      // means it is closing
      if (stack.length === 0) return false;

      const stackTop = stack[stack.length - 1];
      // if they match, pop from stack
      if (
        (char === ')' && stackTop === '(') ||
        (char === ']' && stackTop === '[') ||
        (char === '}' && stackTop === '{')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function isOpeningParenthesis(char) {
  if (char === '(' || char === '[' || char === '{') {
    return true;
  }

  return false;
}

module.exports = isValid;
