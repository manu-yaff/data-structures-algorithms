/**
 * Minimum Depth of Binary Tree
 * Link: https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 */
function minDepth(root) {
  // check for empty tree
  if (root === null) return 0;

  const queue = [root];
  let depth = 1;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();

      if (currentNode.left === null && currentNode.right === null) {
        return depth;
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    depth += 1;
  }

  return depth;
}
