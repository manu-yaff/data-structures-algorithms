const maxProfit = require('./index');

describe(maxProfit.name, () => {
  it.each([
    {
      prices: [7, 1, 5, 3, 6, 4],
      expectedResult: 5,
    },
    {
      prices: [7, 6, 4, 3, 1],
      expectedResult: 0,
    },
    {
      prices: [5],
      expectedResult: 0,
    },
    {
      prices: [8, 100, 4, 300, 20],
      expectedResult: 296,
    },
    {
      prices: [10, 1, 5, 6, 7, 1],
      expectedResult: 6,
    },
  ])('maxProfit($prices) => $expectedResult', ({ prices, expectedResult }) => {
    expect(maxProfit(prices)).toBe(expectedResult);
  });
});
