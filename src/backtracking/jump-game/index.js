/**
 * Jump Game III
 * Link: https://leetcode.com/problems/jump-game-iii/description
 */
function canReach(arr, start) {
  function dfs(start, visited) {
    if (visited.has(start)) return false;

    if (start < 0 || start >= arr.length) return false;

    if (arr[start] === 0) return true;

    visited.add(start);
    return dfs(start + arr[start], visited) || dfs(start - arr[start], visited);
  }

  return dfs(start, new Set());
}
