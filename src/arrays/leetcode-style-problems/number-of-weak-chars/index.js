/**
 * Number of Weak Characters
 * Link: https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/description
 */
function numberOfWeakCharacters(properties) {
  properties.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];

    return a[0] - b[0];
  });

  let maxDefense = 0;
  let weak = 0;

  for (let i = properties.length - 1; i >= 0; i--) {
    if (properties[i][1] < maxDefense) {
      weak++;
    }
    maxDefense = Math.max(maxDefense, properties[i][1]);
  }

  return weak;
}
