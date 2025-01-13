const search = require('./index');

describe(search.name, () => {
  it.each([
    {
      array: [4, 5, 6, 7, 0, 1, 2],
      target: 0,
      output: 4,
    },
    {
      array: [4, 5, 6, 7, 0, 1, 2],
      target: 3,
      output: -1,
    },
    {
      array: [1],
      target: 0,
      output: -1,
    },
  ])('search($array, $target) => $output', ({ array, target, output }) => {
    expect(search(array, target)).toBe(output);
  });
});
