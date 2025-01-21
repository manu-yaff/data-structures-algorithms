/**
 * Binary Tree Right Side View
 * Link: https://leetcode.com/problems/binary-tree-right-side-view/description/
 */
function rightSideView(root) {
  let result = [];

  if (root === null) return result;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (i === levelSize - 1) {
        result.push(current.val);
      }

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  return result;
}
