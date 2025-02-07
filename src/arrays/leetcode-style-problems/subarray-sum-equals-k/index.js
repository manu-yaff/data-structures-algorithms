/**
 * Subarray Sum Equals K
 * Link: https://leetcode.com/problems/subarray-sum-equals-k/description/
 */
function subarraySum(nums, k) {
  const prefixSum = new Map();
  prefixSum.set(0, 1);

  let currentSum = 0;
  let count = 0;

  for (const val of nums) {
    currentSum += val;
    const complement = currentSum - k;

    if (prefixSum.has(complement)) {
      count += prefixSum.get(complement);
    }

    if (prefixSum.has(currentSum)) {
      prefixSum.set(currentSum, prefixSum.get(currentSum) + 1);
    } else {
      prefixSum.set(currentSum, 1);
    }
  }

  return count;
}
