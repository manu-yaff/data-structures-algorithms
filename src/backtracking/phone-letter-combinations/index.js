/**
 * Letter Combinations of a Phone Number
 * Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 */
function letterCombinations(digits) {
  if (digits === '') return [];

  const result = []; // store all combinations

  return dfs(result, [], 0, digits);
}

const keyboard = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function dfs(result, path, index, digits) {
  if (index === digits.length) {
    result.push(path);

    return;
  }

  const currentDigit = digits[index];

  for (const letter of keyboard[currentDigit]) {
    path.push(letter);

    dfs(result, path, index + 1, keyboard, digits);

    path.pop();
  }
}
