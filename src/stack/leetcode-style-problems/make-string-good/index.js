/**
 * Make The String Great
 *
 * Given a string s of lower and upper case English letters.
 * A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
 * 0 <= i <= s.length - 2
 * s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
 *
 * To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
 *
 * Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
 *  Notice that an empty string is also good
 *
 */

// Time complexity O(n)
// Space complexity O(n)
function makeGood(s) {
  if (s.length === 1) return s;

  const stack = [];

  for (const char of s) {
    const stackTop = getStackTop(stack);

    if (stackHasElements(stack) && char !== stackTop && areSameCharButDiffCase(char, stackTop)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

function getStackTop(stack) {
  return stack[stack.length - 1];
}

function stackHasElements(stack) {
  return stack.length > 0;
}

function areSameCharButDiffCase(char1, char2) {
  return char1.toLowerCase() === char2 || char1.toUpperCase() === char2;
}

module.exports = makeGood;
