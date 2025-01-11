const canConstruct = require('./index');

describe(canConstruct.name, () => {
  it.each([
    {
      ransomNote: 'a',
      magazine: 'b',
      output: false,
    },
    {
      ransomNote: 'aa',
      magazine: 'ab',
      output: false,
    },
    {
      ransomNote: 'aa',
      magazine: 'aab',
      output: true,
    },
    {
      ransomNote: 'adam',
      magazine: 'madam',
      output: true,
    },
  ])(
    'canConstruct($ransomNote, $magazine) => $output',
    ({ ransomNote, magazine, output }) => {
      expect(canConstruct(ransomNote, magazine)).toBe(output);
    }
  );
});
