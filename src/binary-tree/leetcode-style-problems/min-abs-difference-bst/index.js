/**
 * Minimum Absolute Difference in BST
 * Link: https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 */
function getMinimumDifference(root) {
  const array = [];

  function dfs(root) {
    if (root === null) return;

    dfs(root.left);
    array.push(root.val);
    dfs(root.right);
  }

  dfs(root);

  let min = Infinity;

  for (let i = 1; i < array.length; i++) {
    const diff = Math.abs(array[i] - array[i - 1]);
    min = Math.min(min, diff);
  }

  return min;
}

// another alternative without using array
function getMinimumDifference(root) {
  let prev = null;
  let min = Infinity;

  function inorder(root) {
    if (root === null) return;

    inorder(root.left);

    if (prev !== null) {
      min = Math.min(min, Math.abs(root.val - prev.val));
    }

    prev = root; // before moving to the right, update the prev to be the parent of right

    inorder(root.right);
  }

  inorder(root);

  return min;
}
