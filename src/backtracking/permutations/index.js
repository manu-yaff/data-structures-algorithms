/**
 * Permutations
 * Link: https://leetcode.com/problems/permutations/description/
 */
function permute(nums) {
  const result = [];
  const set = new Set();

  function dfs(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (const item of nums) {
      if (!set.has(item)) {
        set.add(item);
        dfs([...path, item]);
        set.delete(item);
      }
    }
  }

  dfs([]);

  return result;
}
