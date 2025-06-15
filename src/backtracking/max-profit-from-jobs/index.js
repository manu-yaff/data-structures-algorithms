/**
 * Maximum Profit in Job Scheduling
 * Link: https://leetcode.com/problems/maximum-profit-in-job-scheduling/description/
 */
function jobScheduling(startTime, endTime, profit) {
  const grouping = [];

  for (let i = 0; i < startTime.length; i++) {
    grouping.push([startTime[i], endTime[i], profit[i]]);
  }

  grouping.sort((a, b) => a[0] - b[0]);

  const memo = {};

  function dfs(index) {
    if (index === grouping.length) {
      return 0;
    }

    if (memo[index] !== undefined) return memo[index];

    let res = dfs(index + 1);

    let j = index + 1;

    // this can be done with binary search instead to make it more efficient
    while (j < grouping.length) {
      if (grouping[index][1] <= grouping[j][0]) {
        // we find the next non-overlaping interval
        break;
      }
      j++;
    }

    res = Math.max(res, grouping[index][2] + dfs(j));

    memo[index] = res;

    return res;
  }

  return dfs(0);
}
