/**
 * Generate Parentheses
 * Link: https://leetcode.com/problems/generate-parentheses/description
 */
function generateParenthesis(n) {
  const path = [];
  const output = [];

  function backtrack(openCount, closedCount) {
    if (openCount === closedCount && closedCount === n) {
      output.push(path.join(''));
    }

    if (openCount < n) {
      path.push('(');
      backtrack(openCount + 1, closedCount);
      path.pop();
    }

    if (closedCount < openCount) {
      path.push(')');
      backtrack(openCount, closedCount + 1);
      path.pop();
    }
  }

  backtrack(0, 0);

  return output;
}
