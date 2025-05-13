/**
 * 347 Top K Frequent Elements
 * Link: https://leetcode.com/problems/top-k-frequent-elements/description/
 */
function topKFrequent(nums, k) {
  const map = new Map();
  const result = [];

  for (const item of nums) {
    map.set(item, (map.get(item) ?? 0) + 1);
  }

  const frequencies = new Array(nums.length + 1).fill(null).map((_) => []);

  for (const [value, frequency] of map.entries()) {
    frequencies[frequency].push(value);
  }

  for (let i = frequencies.length - 1; i > 0; i--) {
    for (const item of frequencies[i]) {
      result.push(item);

      if (result.length === k) return result;
    }
  }
}
