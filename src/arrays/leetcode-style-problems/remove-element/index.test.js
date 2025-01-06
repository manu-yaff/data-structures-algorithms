const removeElement = require('./index.js');

describe(removeElement.name, () => {
  it('should remove element from array', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
