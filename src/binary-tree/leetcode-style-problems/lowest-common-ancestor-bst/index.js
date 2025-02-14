/**
 * Lowest Common Ancestor of a Binary Search Tree
 * Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 */
function lowestCommonAncestor(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}
