/*
 * Count Nodes Equal to Average of Subtree
 * Link: https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/description/
 */
function averageOfSubtree(root) {
  let totalCount = 0;

  function dfs(root) {
    if (root === null) {
      return [0, 0];
    }

    const [leftSum, leftCount] = dfs(root.left);
    const [rightSum, rightCount] = dfs(root.right);

    const sum = leftSum + rightSum + root.val;
    const nodesNumber = leftCount + rightCount + 1;

    if (Math.floor(sum / nodesNumber) === root.val) {
      totalCount += 1;
    }

    return [sum, nodesNumber];
  }

  dfs(root);

  return totalCount;
}
