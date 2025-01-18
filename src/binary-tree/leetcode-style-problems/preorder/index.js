/**
 * Binary Tree Preorder Traversal
 * Link: https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 */
function preorderTraversal(root) {
  if (root === null) return [];

  const output = [];

  function preorder(root) {
    if (root !== null) {
      output.push(root.val);
      preorder(root.left);
      preorder(root.right);
    }
  }

  preorder(root);

  return output;
}

function preorderIterative(root) {
  const result = [];
  const stack = [];

  let current = root;

  while (current !== null || stack.length > 0) {
    if (current !== null) {
      result.push(current.val);
      stack.push(current.right);
      current = current.left;
    } else {
      current = stack.pop();
    }
  }

  return result;
}
