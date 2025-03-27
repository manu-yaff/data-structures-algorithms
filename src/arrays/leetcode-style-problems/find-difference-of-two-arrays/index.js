/**
 * Find the Difference of Two Arrays
 * Link: https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
 */
function findDifference(nums1, nums2) {
  const result = [[], []];
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  for (const n of s1.values()) {
    if (!s2.has(n)) {
      result[0].push(n);
    }
  }

  for (const n of s2.values()) {
    if (!s1.has(n)) {
      result[1].push(n);
    }
  }

  return result;
}
