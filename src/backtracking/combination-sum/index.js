/**
 * Combination Sum
 * Link: https://leetcode.com/problems/combination-sum/description/
 */

function combinationSum(candidates, target) {
  const res = [];

  function dfs(nums, start, remaining, path) {
    if (remaining === 0) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      const num = nums[i];

      if (remaining - num < 0) continue;

      path.push(num);
      dfs(nums, i, remaining - num, path);
      path.pop();
    }
  }

  candidates.sort((a, b) => a - b);

  dfs(candidates, 0, target, []);

  return res;
}

combinationSum([2, 3, 6, 7], 7);
