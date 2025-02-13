/**
 * Validate Binary Search Tree
 * Link: https://leetcode.com/problems/validate-binary-search-tree/description/
 */
function isValidBST(root) {
  return dfs(root, -Infinity, Infinity);
}

function dfs(root, min, max) {
  if (root === null) return true;

  if (!(root.val > min && root.val < max)) return false;

  return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
}
