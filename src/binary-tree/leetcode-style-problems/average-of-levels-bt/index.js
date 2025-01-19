/**
 * Average of Levels in Binary Tree
 * Link: https://leetcode.com/problems/average-of-levels-in-binary-tree/
 */
function averageOfLevels(root) {
  const output = [];
  const queue = [root];

  while (queue.length > 0) {
    let levelSum = 0;
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelSum += currentNode.val;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    const average = levelSum / levelSize;

    output.push(average);
  }

  return output;
}
