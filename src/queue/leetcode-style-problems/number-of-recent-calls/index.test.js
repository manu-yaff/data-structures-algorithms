const RecentCounter = require('./index');

describe(RecentCounter.name, () => {
  it('should get number of recent calls', () => {
    // Arrange
    const recentCounter = new RecentCounter();

    // Act & Assert
    expect(recentCounter.ping(1)).toBe(1);
    expect(recentCounter.ping(100)).toBe(2);
    expect(recentCounter.ping(3001)).toBe(3);
    expect(recentCounter.ping(3002)).toBe(3);
  });
});
