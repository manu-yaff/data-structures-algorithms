const distributeApples = require('./index');

describe(distributeApples.name, () => {
  it('should distribute apples', () => {
    expect(distributeApples([1, 3, 2], [4, 3, 1, 5, 2])).toEqual(2);
    expect(distributeApples([5, 5, 5], [2, 4, 2, 7])).toEqual(4);
  });
});
