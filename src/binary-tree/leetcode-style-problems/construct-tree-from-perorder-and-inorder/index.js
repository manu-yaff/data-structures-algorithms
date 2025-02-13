/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 * Link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0) return null;

  const map = new Map();

  inorder.forEach((node, index) => {
    map.set(node, index);
  });

  return helper(preorder, map, 0, 0, preorder.length);
}

function helper(preorder, map, preStart, inStart, size) {
  if (size <= 0) return null;

  const rootValue = preorder[preStart];
  const inorderIndex = map.get(rootValue);
  const leftSize = inorderIndex - inStart;

  const left = helper(preorder, map, preStart + 1, inStart, leftSize);
  const right = helper(
    preorder,
    map,
    preStart + 1 + leftSize,
    inorderIndex + 1,
    size - 1 - leftSize
  );

  return new Node(rootValue, left, right);
}
