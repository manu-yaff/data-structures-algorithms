const timeRequiredToBuy = require('./index');

describe(timeRequiredToBuy.name, () => {
  it.each([
    {
      tickets: [2, 3, 2],
      k: 2,
      expected: 6,
    },
    {
      tickets: [5, 1, 1, 1],
      k: 0,
      expected: 8,
    },
  ])('should get time required to buy tickets', ({ tickets, k, expected }) => {
    // Arrange

    // Act
    const result = timeRequiredToBuy(tickets, k);

    // Assert
    expect(result).toBe(expected);
  });
});
