/**
 * Maximum Depth of Binary Tree
 * Link: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 */
function maxDepth(root) {
  if (root === null) return 0;

  return dfs(root, 0);
}

function dfs(root, count) {
  if (root === null) return count;

  return Math.max(dfs(root.left, count + 1), dfs(root.right, count + 1));
}
