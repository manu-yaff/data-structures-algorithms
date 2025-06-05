/**
 * Reorganize string
 * Link: https://leetcode.com/problems/reorganize-string/description
 */
function reorganizeString(s) {
  // count occurrences
  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  // get max value and key
  const maxValue = Math.max(...Array.from(map.values()));

  const maxObject = [...map.entries()].find((x) => x[1] === maxValue);

  const array = new Array(s.length).fill(null);

  let index = 0;

  if (maxValue > Math.ceil(s.length / 2)) return '';

  // fill the max value first
  while (maxObject[1] > 0) {
    array[index] = maxObject[0];
    index += 2;
    maxObject[1] = maxObject[1] - 1;
  }

  for (let [key, value] of map.entries()) {
    while (value > 0 && key !== maxObject[0]) {
      if (index >= s.length) index = 1;

      array[index] = key;
      value--;
      index += 2;
    }
  }

  return array.join('');
}
