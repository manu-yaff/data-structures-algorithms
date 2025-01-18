/**
 * Binary Tree Level Order Traversal
 * Link: https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 */
function levelOrder(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      level.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    result.push(level);
  }

  return result;
}
