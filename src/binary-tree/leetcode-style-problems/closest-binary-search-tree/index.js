/**
 * 270. Closest Binary Search Tree Value
 * Link: https://leetcode.com/problems/closest-binary-search-tree-value/description/?envType=problem-list-v2&envId=21i5xqws
 */
function closestValue(root, target) {
  const array = [];

  function inorder(root) {
    if (root === null) return;

    inorder(root.left);
    array.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  let minDiff = Infinity;
  let minValue = Infinity;

  for (const item of array) {
    const diff = Math.abs(item - target);

    if (diff <= minDiff) {
      if (diff === minDiff) {
        minValue = Math.min(minValue, item);
      } else {
        minValue = item;
      }
      minDiff = diff;
    }
  }

  return minValue;
}
