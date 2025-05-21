/**
 * Subtree of Another Tree
 * Link: https://leetcode.com/problems/subtree-of-another-tree/description/
 */
function areSameTree(t1, t2) {
  if (t1 === null && t2 !== null) return false;

  if (t2 === null && t1 !== null) return false;

  if (t1 === null && t2 === null) return true;

  if (t1.val !== t2.val) return false;

  return areSameTree(t1.left, t2.left) && areSameTree(t1.right, t2.right);
}

function isSubtree(root, subRoot) {
  if (root === null) {
    return false;
  }

  if (areSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
