const search = require('./index');

describe(search.name, () => {
  it.each([
    {
      array: [2, 4, 6, 8, 10],
      target: 6,
      output: 2,
    },
    {
      array: [-10, -5, 0, 5, 10],
      target: -5,
      output: 1,
    },
    {
      array: [42],
      target: 42,
      output: 0,
    },
  ])('seach($array, $target) => $output', ({ array, target, output }) => {
    expect(search(array, target)).toBe(output);
  });
});
