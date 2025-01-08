const productExceptSelf = require('./index');

describe(productExceptSelf.name, () => {
  it.each([
    {
      array: [1, 2, 3, 4],
      output: [24, 12, 8, 6],
    },
    {
      array: [-1, 1, 0, -3, 3],
      output: [0, 0, 9, 0, 0],
    },
  ])('productExceptSelf($array) => $output', ({ array, output }) => {
    expect(productExceptSelf(array)).toEqual(output);
  });
});
