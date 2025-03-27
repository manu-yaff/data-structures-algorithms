/**
 * Binary Tree Paths
 * Link: https://leetcode.com/problems/binary-tree-paths/description/
 */
function binaryTreePaths(root) {
  const result = [];

  function dfs(root, path) {
    if (root === null) return;

    const currentPath = [...path, root.val];

    if (root.left === null && root.right === null) {
      result.push(currentPath);
    } else {
      dfs(root.left, currentPath);
      dfs(root.right, currentPath);
    }
  }

  dfs(root, []);

  return result.map((path) => path.join('->'));
}
