const countStudents = require('./index');

describe(countStudents.name, () => {
  it('should count students', () => {
    expect(countStudents([1, 1, 0, 0], [0, 1, 0, 1])).toBe(0);
    expect(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])).toBe(3);
  });
});
