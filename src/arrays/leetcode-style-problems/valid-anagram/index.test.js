const validAnagram = require('./index');

describe(validAnagram.name, () => {
  it('should return true when s is anagram of t', () => {
    expect(validAnagram('anagram', 'nagaram')).toBe(true);

    expect(validAnagram('rat', 'car')).toBe(false);
  });
});
