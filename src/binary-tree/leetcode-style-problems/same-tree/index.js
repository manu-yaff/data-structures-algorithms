/**
 * Same Tree
 * Link: https://leetcode.com/problems/same-tree/description/
 */
function isSameTree(p, q) {
  if (p === null && q === null) return true;

  if (p === null || q === null || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
