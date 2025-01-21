/**
 * Path Sum II
 * Link: https://leetcode.com/problems/path-sum-ii/
 */
function pathSum(root, targetSum) {
  if (root === null) return [];

  const result = [];

  function dfs(root, arr, sum) {
    if (root === null) {
      return;
    }

    if (root.left === null && root.right === null) {
      if (sum + root.val === targetSum) {
        result.push([...arr, root.val]);
      }

      return;
    }

    dfs(root.left, [...arr, root.val], sum + root.val);
    dfs(root.right, [...arr, root.val], sum + root.val);
  }

  dfs(root, [], 0);

  return result;
}
