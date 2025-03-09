/**
 * Merge Intervals
 * Link: https://leetcode.com/problems/merge-intervals/
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [_, rEnd] = result[result.length - 1];
    const [cStart, cEnd] = intervals[i];

    if (rEnd >= cStart) {
      result[result.length - 1][1] = Math.max(rEnd, cEnd);
    } else {
      result.push([cStart, cEnd]);
    }
  }

  return result;
}
