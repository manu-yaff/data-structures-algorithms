/**
 * 404. Sum of Left Leaves
 * Link: https://leetcode.com/problems/sum-of-left-leaves/description/
 */
function sumOfLeftLeaves(root) {
  let sum = 0;

  function isLeaf(root) {
    return root.left === null && root.right === null;
  }

  function isLeftChild(parent, root) {
    return parent !== null && parent.left === root;
  }

  function dfs(root, parent) {
    if (root === null) return;

    dfs(root.left, root);

    if (isLeaf(root) && isLeftChild(parent, root)) {
      sum += root.val;
    }

    dfs(root.right, root);
  }

  dfs(root, null);

  return sum;
}
