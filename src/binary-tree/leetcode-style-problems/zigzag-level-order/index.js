/**
 * Binary Tree Zigzag Level Order Traversal
 * Link: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 */
function zigzagLevelOrder(root) {
  if (root === null) {
    return [];
  }

  const output = [];
  const queue = [root];

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

    if (output.length % 2 === 0) {
      output.push(level);
    } else {
      output.push(level.reverse());
    }
  }

  return output;
}
