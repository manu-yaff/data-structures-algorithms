/**
 * Insert into Binary Search Tree
 * Link: https://leetcode.com/problems/insert-into-a-binary-search-tree/description/
 */
function insertIntoBST(root, val) {
  if (root === null) return new TreeNode(val);

  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
}
