/**
 * Binary Tree Level Order Traversal II
 * Link: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/
 */
function levelOrderBottom(root) {
  if (root === null) return [];

  const queue = [root];
  const output = [];

  while (queue.length > 0) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      level.push(currentNode.val);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    output.push(level);
  }

  return output.reverse();
}
