/**
 * Count Good Nodes in Binary Tree
 * Link: https://leetcode.com/problems/count-good-nodes-in-binary-tree/
 */
function goodNodes(root) {
  return dfs(root, -Infinity);
}

function dfs(root, max) {
  if (root === null) return 0;

  let addition = root.val >= max ? 1 : 0;
  let newMax = Math.max(max, root.val);

  return addition + dfs(root.left, newMax) + dfs(root.right, newMax);
}
