/**
 * Fruit Into Baskets
 * Link: https://leetcode.com/problems/fruit-into-baskets/description/
 */
function totalFruit(fruits) {
  const map = new Map();

  let max = -Infinity;
  let left = 0;

  for (let right = 0; right < fruits.length; right++) {
    map.set(fruits[right], (map.get(fruits[right]) ?? 0) + 1);

    while (map.size > 2) {
      map.set(fruits[left], map.get(fruits[left]) - 1);

      if (map.get(fruits[left]) <= 0) {
        map.delete(fruits[left]);
      }

      left++;
    }

    max = Math.max(max, right - left + 1);
  }

  return max;
}
