const Deque = require('./index');

describe(Deque.name, () => {
  describe(Deque.prototype.addFront.name, () => {
    it('should add element to the front when deque is empty', () => {
      // Arrange
      const deque = new Deque();

      // Act
      deque.addFront(299);

      // Assert
      expect(deque.size()).toBe(1);
      expect(deque.getFront().value).toBe(299);
    });

    it('should add element to the front when deque is not empty', () => {
      // Arrange
      const deque = new Deque();

      // Act
      deque.addFront(1);
      deque.addFront(4);
      deque.addFront(2);
      deque.addFront(8);

      // Assert
      expect(deque.size()).toBe(4);
      expect(deque.getFront().value).toBe(8);
    });
  });

  describe(Deque.prototype.addRear.name, () => {
    it('should add element to the rear when deque is empty', () => {
      // Arrange
      const deque = new Deque();

      // Act
      deque.addRear(299);

      // Assert
      expect(deque.size()).toBe(1);
      expect(deque.getRear().value).toBe(299);
    });

    it('should add element to the rear when deque is not empty', () => {
      // Arrange
      const deque = new Deque();
      deque.addFront(120);
      deque.addFront(80);
      deque.addFront(3287);
      deque.addFront(18);

      // Act
      deque.addRear(299);
      deque.addRear(300);

      // Assert
      expect(deque.size()).toBe(6);
      expect(deque.getRear().value).toBe(300);
    });
  });

  describe(Deque.prototype.removeFront.name, () => {
    it('return null when trying to remove front from empty deque', () => {
      // Arrange
      const deque = new Deque();

      // Act
      const item = deque.removeFront();

      // Assert
      expect(item).toBe(null);
      expect(deque.size()).toBe(0);
    });

    it('return item when removing front from single-element deque', () => {
      // Arrange
      const deque = new Deque();
      deque.addFront(120);

      // Act
      const item = deque.removeFront();

      // Assert
      expect(deque.size()).toBe(0);
      expect(item).toBe(120);
      expect(deque.getFront()).toBe(null);
    });

    it('return item when removing front from deque with multiple elements', () => {
      // Arrange
      const deque = new Deque();

      deque.addFront(120);
      deque.addFront(299);
      deque.addFront(123);
      deque.addFront(120);

      deque.addRear(100);
      deque.addRear(499);

      // Act
      const item = deque.removeFront();

      // Assert
      expect(deque.size()).toBe(5);
      expect(item).toBe(120);
      expect(deque.getFront().value).toBe(123);
    });
  });

  describe(Deque.prototype.removeRear.name, () => {
    it('return null when trying to remove rear from empty deque', () => {
      // Arrange
      const deque = new Deque();

      // Act
      const item = deque.removeRear();

      // Assert
      expect(item).toBe(null);
      expect(deque.size()).toBe(0);
    });

    it('return item when removing rear from single-element deque', () => {
      // Arrange
      const deque = new Deque();
      deque.addFront(120);

      // Act
      const item = deque.removeRear();

      // Assert
      expect(deque.size()).toBe(0);
      expect(item).toBe(120);
      expect(deque.getRear()).toBe(null);
    });

    it('return item when removing rear from deque with multiple elements', () => {
      // Arrange
      const deque = new Deque();

      deque.addFront(120);
      deque.addFront(299);
      deque.addFront(123);
      deque.addFront(120);

      deque.addRear(100);
      deque.addRear(499);
      deque.addRear(1234);

      // Act
      const item = deque.removeRear();

      // Assert
      expect(deque.size()).toBe(6);
      expect(item).toBe(1234);
      expect(deque.getRear().value).toBe(499);
    });
  });

  describe(Deque.prototype.isEmpty.name, () => {
    it('should return true for empty deque', () => {
      // Arrange
      const deque = new Deque();

      // Act
      const isEmpty = deque.isEmpty();

      // Assert
      expect(isEmpty).toBe(true);
    });

    it('should return false for non-empty deque', () => {
      // Arrange
      const deque = new Deque();

      deque.addFront(120);
      deque.addFront(299);
      deque.addFront(123);
      deque.addFront(120);

      deque.addRear(100);
      deque.addRear(499);
      deque.addRear(1234);

      // Act
      const isEmpty = deque.isEmpty();

      // Assert
      expect(isEmpty).toBe(false);
    });
  });

  describe(Deque.prototype.size.name, () => {
    it('should return 0 for empty deque', () => {
      // Arrange
      const deque = new Deque();

      // Act
      const size = deque.size();

      // Assert
      expect(size).toBe(0);
    });

    it('should return size for non-empty deque', () => {
      // Arrange
      const deque = new Deque();

      deque.addFront(120);
      deque.addFront(299);
      deque.addFront(123);
      deque.addFront(120);

      deque.addRear(100);
      deque.addRear(499);
      deque.addRear(1234);

      // Act
      const size = deque.size();

      // Assert
      expect(size).toBe(7);
    });
  });
});
