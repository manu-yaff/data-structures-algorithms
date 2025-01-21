/**
 * Path Sum
 * Link: https://leetcode.com/problems/path-sum/description/
 */
function hasPathSum(root, targetSum) {
  if (root === null) return false;

  function dfs(current, sum) {
    if (current === null) return false;

    // leaf node
    if (current.left === null && current.right === null) {
      return targetSum === sum;
    }

    return (
      dfs(current.left, sum + current.val) ||
      dfs(current.right, sum + current.val)
    );
  }

  return dfs(root, 0);
}
