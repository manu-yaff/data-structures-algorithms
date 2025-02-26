/**
 * Subsets
 * Link: https://leetcode.com/problems/subsets/description/
 */
function subsets(nums) {
  const res = [];
  const subset = [];

  function dfs(start) {
    if (start === nums.length) {
      res.push([...subset]);
      return;
    }

    subset.push(nums[start]);
    dfs(start + 1);

    subset.pop();
    dfs(start + 1);
  }

  dfs(0);

  return res;
}
