/**
 * Binary Tree Postorder Traversal
 * Link: https://leetcode.com/problems/binary-tree-postorder-traversal/
 */
function postorderTraversal(root) {
  const output = [];

  function postOrder(root) {
    if (root !== null) {
      postOrder(root.left);
      postOrder(root.right);
      output.push(root.val);
    }
  }

  postOrder(root);

  return output;
}

function postorderIterative(root) {
  const output = [];
  const stack = [];

  let current = root;

  while (current !== null || stack.length > 0) {
    if (current !== null) {
      stack.push(current);
      current = current.left;
    } else {
      let temp = stack[stack.length - 1].right;
      // means we've visited both left and right
      if (temp === null) {
        temp = stack.pop();
        output.push(temp.val);
        // if top of the stack is the right child of current node
        // also means that we visited left and right, so we process the node
        while (stack.length > 0 && temp === stack[stack.length - 1].right) {
          temp = stack.pop();
          output.push(temp.val);
        }
      } else {
        current = temp;
      }
    }
  }

  return output;
}
