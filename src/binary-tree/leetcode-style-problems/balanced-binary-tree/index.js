/**
 * Balanced Binary Tree
 * Link: https://leetcode.com/problems/balanced-binary-tree/
 */
function isBalanced(root) {
  return threeHeight(root) !== -1;
}

function threeHeight(tree) {
  if (tree === null) return 0;

  const leftHeight = threeHeight(tree.left);
  const rightHeight = threeHeight(tree.right);

  if (Math.abs(leftHeight - rightHeight) > 1) return -1; // unbalanced

  if (leftHeight === -1 || rightHeight === -1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}
