/**
 * Pairs of Songs With Total Durations Divisible by 60
 * Link: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 */
function numPairsDivisibleBy60(nums) {
  const count = new Array(60).fill(0);

  let res = 0;

  for (const time of nums) {
    res += count[(60 - (time % 60)) % 60];
    count[time % 60] += 1;
  }

  return res;
}
