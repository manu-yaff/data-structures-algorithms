/**
 * Binary Tree Inorder Traversal
 * Link: https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 */
function inorderTraversal(root) {
  if (root === null) {
    return [];
  }

  const output = [];

  function inorder(root) {
    if (root !== null) {
      inorder(root.left);
      output.push(root.val);
      inorder(root.right);
    }
  }

  inorder(root);

  return output;
}

function inorderIterative(root) {
  const output = [];
  const stack = [];

  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    output.push(current.val);
    current = current.right;
  }

  return output;
}
