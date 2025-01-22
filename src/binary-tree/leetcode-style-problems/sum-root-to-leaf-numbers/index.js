/**
 * Sum Root to Leaf Numbers
 * Link: https://leetcode.com/problems/sum-root-to-leaf-numbers/description/
 */
function sumNumbers(root) {
  let result = 0;

  function dfs(root, path) {
    if (root === null) {
      return;
    }

    if (root.left === null && root.right === null) {
      const pathNumber = path * 10 + root.val; // by multiplying by 10, we can get the correct number for the path

      result += pathNumber;
      return;
    }

    dfs(root.left, path * 10 + root.val);
    dfs(root.right, path * 10 + root.val);
  }

  dfs(root, 0);

  return result;
}
