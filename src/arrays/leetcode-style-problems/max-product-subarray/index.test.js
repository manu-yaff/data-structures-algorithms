const maxProduct = require('./index');

describe(maxProduct.name, () => {
  it.each([
    {
      array: [2, 3, -2, 4],
      result: 6,
    },
    {
      array: [-2, 0, -1],
      result: 0,
    },
    {
      array: [19],
      result: 19,
    },
    {
      array: [-6, 7, 4, 5, 1, -2],
      result: 1680,
    },
    {
      array: [3, -1, 4],
      result: 4,
    },
    {
      array: [2, -5, -2, -4, 3],
      result: 24,
    },
    {
      array: [-1, -2, -9, -6],
      result: 108,
    },
  ])('maxProduct($array) => $result', ({ array, result }) => {
    expect(maxProduct(array)).toBe(result);
  });
});
