const palindromeChecker = require('./index');

describe(palindromeChecker.name, () => {
  it.each([
    { input: 'madam', output: true },
    { input: 'toot', output: true },
    { input: 'radar', output: true },
  ])("should return $output for palindrome '$input'", ({ input, output }) => {
    expect(palindromeChecker(input)).toBe(output);
  });

  it.each([
    { input: 'lsdkjfskf', output: false },
    { input: 'miracle', output: false },
    { input: 'programming', output: false },
  ])("should return $output for palindrome '$input'", ({ input, output }) => {
    expect(palindromeChecker(input)).toBe(output);
  });
});
